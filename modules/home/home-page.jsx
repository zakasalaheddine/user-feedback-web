import { Box, Heading } from '@chakra-ui/layout'
import styled from '@emotion/styled'
import Navbar from 'modules/layout/components/Navbar'
import { PageTitle } from 'modules/layout/styled-elements'
import AddStoreButton from './components/add-store-button'
import StoreCard from './components/store-card'

const StoresData = [
  { name: 'UNO.MA', responsesCount: 25 },
  { name: 'JUMIA.MA', responsesCount: 5 },
  { name: 'I FIX YOUR MAC', responsesCount: 15 },
  { name: 'DERBGHALLAF', responsesCount: 95 },
  { name: 'DERBGHALLAF', responsesCount: 95 },
  { name: 'DERBGHALLAF', responsesCount: 95 },
  { name: 'DERBGHALLAF', responsesCount: 95 },
]

export default function HomePage() {
  return (
    <Box>
      <Navbar />
      <Box as="main" w={['full', '720px', '960px', '1300px']} mx="auto" px="2">
        <PageTitle my="2rem" fontSize="1.5rem" flex="1">
          My Businesses
        </PageTitle>
        <StoresContainer>
          <AddStoreButton />
          {StoresData.map((store) => (
            <StoreCard name={store.name} count={store.responsesCount} />
          ))}
        </StoresContainer>
      </Box>
    </Box>
  )
}

const StoresContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
