/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Styled } from 'theme-ui'
import truncateText from '../utils/truncateText'

type CardProps = {
  issue: any
  idx: number
}

const iconWrapper = {
  width: '24px',
  height: '24px',
  backgroundColor: 'white',
  borderRadius: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const Card = ({ issue }: CardProps) => {
  return (
    <Flex
      onClick={() => {
        let urlPath = issue.url.replace(
          'https://api.github.com/repos/',
          'https://github.com/',
        )
        window.open(urlPath)
      }}
      sx={{
        cursor: 'pointer',
        flexDirection: 'column',
        boxShadow: '0px 10px 50px -20px rgba(0,0,0,0.35)',
        height: '100%',
        background: 'white',
      }}
    >
      <Box sx={{ p: 4, backgroundColor: 'ocean' }}>
        <Styled.h3 sx={{ m: 0, color: 'white', fontSize: 2 }}>
          {truncateText(issue.title, 60)}
        </Styled.h3>
        <Flex sx={{ position: 'absolute', top: 2, right: 2, width: 'fit-content', justifyContent: 'flex-end', display: 'flex', gridGap: '10px'}}>
          {issue.pull_request && issue.pull_request.url && (
            <div style={iconWrapper}>
              <img
                className="PR-ICON"
                sx={{
                  display: 'block',
                  width: '14px',
                  height: '14px',
                  position: 'absolute',
                  top: '46%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
                src="images/icons/pull-request.svg"
                alt="pull-request"
              />
            </div>
          )}

          {issue.state === 'closed' && (
            <div style={iconWrapper}>
              <img
                sx={{
                  display: 'block',
                  width: '14px',
                  height: '14px',
                }}
                src="images/icons/issue-closed.svg"
                alt="close-btn"
              />
            </div>
          )}
        </Flex>
      </Box>
      <Flex
        sx={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          flex: 1,
        }}
      >
        <Box
          sx={{
            p: 3,
          }}
        >
          <p
            sx={{
              overflow: 'hidden',
              fontSize: 1,
            }}
          >
            {issue.body ? (
              <span>{truncateText(issue.body, 200)}</span>
            ) : (
              <span sx={{ color: 'gray1' }}>No description provided</span>
            )}
          </p>
        </Box>
        <Box
          sx={{
            p: 3,
            pt: '0px',
          }}
        >
          <ul sx={{ display: 'flex' }}>
            {issue.labels.map((label) => {
              return (
                <li
                  key={issue.title + label.name}
                  sx={{
                    display: 'flex',
                    placeItems: 'center',
                    backgroundColor: 'neonPink',
                    color: 'white',
                    fontSize: 1,
                    fontFamily: 'small',
                    fontWeight: 800,
                    p: '3px',
                    pl: 1,
                    pr: 2,
                    mr: 2,
                    borderRadius: '4px',
                  }}
                >
                  <span sx={{ fontSize: 0 }}>{truncateText(label.name, 20)}</span>
                </li>
              )
            })}
          </ul>
        </Box>
      </Flex>
    </Flex>
  )
}

export default Card
