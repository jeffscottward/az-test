/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Input, Styled } from 'theme-ui'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'

const Index = () => {
  const router = useRouter()

  const handleSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    router.push(`/github-repo?repoURL=${e.target[0].value}`)
  }

  return (
    <Layout>
      <Flex
        sx={{
          placeItems: 'center',
          backgroundColor: 'neonPink',
          height: '100vh',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ maxWidth: '700px', width: ['80%','100%'] }}>
          <Styled.h1 sx={{ textAlign: 'center', color: 'white', mb: 3, fontSize: [4,5] }}>
            Github Issue Viewer
          </Styled.h1>
          <Flex
            sx={{
              backgroundColor: 'background',
              alignItems: 'center',
              justifyContent: 'flex-start',
              boxShadow: '0px 10px 50px -20px rgba(0,0,0,0.75)',
            }}
          >
            <img
              sx={{
                display: 'block',
                maxWidth: ['30px','40px'],
                maxHeight: ['30px','40px'],
                p: 1,
                ml: 3,
                mr: 0,
              }}
              src="images/icons/search.svg"
              alt="close-btn"
            />
             <form onSubmit={handleSubmit} sx={{display: 'flex', flex: 1}}>
              <Input
                type="url"
                pattern="https://github.com/.*"
                required
                placeholder="Paste a link to a GitHub repo!"
                sx={{
                  flex: 1,
                  border: 'none',
                  p: 3,
                  pl: [1, 2],
                  color: 'text',
                  fontSize: [2,4],
                  '&:focus, &:invalid, &:required': {
                    outline: 'none',
                    boxShadow: 'none'
                  }
                }}
              />
             </form>
          </Flex>
        </Box>
      </Flex>
    </Layout>
  )
}

export default Index
