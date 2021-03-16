/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Grid, Flex, Styled } from 'theme-ui'

import { useRouter } from 'next/router'

import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'
import LoadingSpinner from '../components/LoadingSpinner'

import truncateText from '../utils/truncateText'

const GitHubRepo = () => {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('All Issues')
  const [repoData, setRepoData] = useState([])
  const [pageAnimationInFinished, setPageAnimationInFinished] = useState(false)
  const [pageAnimationOutStarted, setPageAnimationOutStarted] = useState(false)
  const [repoDataLoaded, setRepoDataLoaded] = useState(false)
  const githubURL = router.query.repoURL
  const tabs = ['All Issues', 'Open Issues', 'Closed Issues', 'Pull Request']

  const [error, setError] = useState('');

  useEffect(() => {
    if (router.query.repoURL !== undefined) {
      let urlParts = String(githubURL).split('/')
      let repo = urlParts[urlParts.length - 1]
      let org = urlParts[urlParts.length - 2]

      const getRepoData = async () => {
        try {
          const response = await window.fetch(
            `https://api.github.com/repos/${org}/${repo}/issues?page=1&per_page=200&state=all`,
          )
          if(response.ok) {
            const JSONData = await response.json()
            setRepoData(JSONData)
          } else {
            throw error
          }
        } catch (error) {
          setError('Bad URL - Please Try again')
        }
        setRepoDataLoaded(true)
      }
      getRepoData()
    }
  }, [router.query.repoURL && pageAnimationInFinished])

  let repoDataFiltered = null
  switch (activeTab) {
    case tabs[0]:
      // All
      repoDataFiltered = repoData
      break
    case tabs[1]:
      // Open
      repoDataFiltered = repoData.filter((issue) => issue.state === 'open')
      break
    case tabs[2]:
      // Closed
      repoDataFiltered = repoData.filter((issue) => issue.state === 'closed')
      break
    case tabs[3]:
      // Pull
      repoDataFiltered = repoData.filter((issue) => 'pull_request' in issue)
      break
    default:
      repoDataFiltered = repoData
      break
  }

  const handlePageAnimationEnd = () => {
    if(pageAnimationInFinished === false) {
      setPageAnimationInFinished(true)
      return
    }
    if(pageAnimationOutStarted === true) {
      router.push('/')
    }
  }

  return (
    <Layout>
      <div
        className={(pageAnimationInFinished && 'in ') + (pageAnimationOutStarted && 'out')}
        sx={{ 
          animation: 'fadeIn 2s forwards',
          '&.out': {
            animation: 'fadeOut 1s forwards',
          }
        }}
        onAnimationEnd={handlePageAnimationEnd}
      >
        <header
          sx={{
            py: 4,
            px: 5,
            backgroundColor: 'neonPink',
            boxShadow: '0px 10px 50px -20px rgba(0,0,0,0.75)',
          }}
        >
          <Flex
            sx={{
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: ['column', 'row'],
            }}
          >
            <a href="/" sx={{ textDecoration: 'none' }}>
              <Styled.h2 sx={{ color: 'white', mb: 0, textAlign: 'center' }}>
                Github Issue Viewer
              </Styled.h2>
            </a>
            <a
              href={String(githubURL)}
              target="_blank"
              sx={{
                fontSize: [2, 3],
                mt: [3, 0],
                display: 'block',
                color: 'maroon',
                textDecoration: 'none',
                textAlign: 'center',
              }}
            >
              {truncateText(String(githubURL), 50)}
            </a>
          </Flex>
        </header>
        <Box sx={{ px: 4 }}>
          <Box>
            <Box
              className="sub-header"
              sx={{
                maxWidth: '1260px',
                pt: 5,
                m: 'auto',
                mb: 3,
              }}
            >
              <nav>
                <ul
                  sx={{
                    display: 'flex',
                    li: {
                      mr: '1rem',
                      fontSize: '14px',
                      cursor: 'pointer',
                      mb: [3, 0],
                      '&.active': {
                        color: 'neonPink',
                      },
                      span: {
                        textAlign: 'center',
                      },
                    },
                  }}
                >
                  {tabs.map((tab) => {
                    return (
                      <li
                        key={'tab-' + tab}
                        className={activeTab === tab ? 'active' : ''}
                        onClick={() => {
                          setActiveTab(tab)
                        }}
                      >
                        <span>{tab}</span>
                      </li>
                    )
                  })}
                </ul>
              </nav>
            </Box>
            <img
              sx={{
                display: 'block',
                width: '30px',
                height: '30px',
                position: 'absolute',
                top: [3, 4],
                right: '0px',
                cursor: 'pointer',
                '&:hover': {
                  filter: 'brightness(0%)',
                },
              }}
              src="images/icons/close.svg"
              alt="close-btn"
              onClick={() => {
                setPageAnimationOutStarted(true)
              }}
            />
          </Box>
          {error !== '' && (
            <Grid
              sx={{
                animation: 'fadeInUp .5s forwards',
                gap: 5,
                gridTemplateColumns: ['1fr', '1fr 1fr', '1fr 1fr 1fr'],
                maxWidth: '1260px',
                m: 'auto',
                pb: 5,
              }}
            >
              <div>
                Bad URL - please try another one
              </div>
            </Grid>
          )}
          {repoDataLoaded === false && repoDataFiltered.length === 0 ? (
            <LoadingSpinner />
          ) : (
            <Grid
              sx={{
                animation: 'fadeInUp .5s forwards',
                gap: 5,
                gridTemplateColumns: ['1fr', '1fr 1fr', '1fr 1fr 1fr'],
                maxWidth: '1260px',
                m: 'auto',
                pb: 5,
              }}
            >
              {repoDataFiltered.length > 0 &&
                repoDataFiltered.map((issue, idx) => (
                    <Card key={issue.title + idx} issue={issue} idx={idx} />
                ))}
            </Grid>
          )}
          {repoDataLoaded === true && repoDataFiltered.length === 0 && (
             <Grid
             sx={{
               animation: 'fadeInUp .5s forwards',
               gap: 5,
               gridTemplateColumns: ['1fr', '1fr 1fr', '1fr 1fr 1fr'],
               maxWidth: '1260px',
               m: 'auto',
               pb: 5,
             }}
           >
             No Results
           </Grid>
          )}
        </Box>
      </div>
    </Layout>
  )
}

export default GitHubRepo
