import { Box } from '@chakra-ui/layout'
import Navbar from './components/Navbar'
import Sidebar from './components/sidebar'
import { PageTitle } from './styled-elements'

export default function DashboardLayout({ pageTitle, sidebar, children }) {
  return (
    <>
      <Navbar />
      <Box as="main" maxW={['full', '720px', '960px', '1300px']} mx="auto" px="2">
        <PageTitle my="2rem" fontSize="1.5rem" flex="1">
          {pageTitle}
        </PageTitle>
        <Box display="flex" flexDirection={['column', 'column', 'row']}>
          {sidebar}
          <Box flex="1" p="2">{children}</Box>
        </Box>
      </Box>
    </>
  )
}
