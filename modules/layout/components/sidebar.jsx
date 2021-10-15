import { Box } from '@chakra-ui/layout'
import { GoDashboard, GoDatabase, GoTrashcan } from 'react-icons/go'
import { FaEdit, FaComments } from 'react-icons/fa'
import SidebarButton from './sidebar-button'

export default function Sidebar() {
  return (
    <Box width={['full', '16.66666667%']} flex={['auto', '0 0 16.66666667%']}>
      <SidebarButton text="Statistics" buttonIcon={GoDashboard} isActive />
      <SidebarButton text="Editor" buttonIcon={FaEdit} />
      <SidebarButton text="Responses" buttonIcon={FaComments} />
      <SidebarButton text="Data Manager" buttonIcon={GoDatabase} />
      <SidebarButton text="Delete Store" buttonIcon={GoTrashcan} isDanger />
    </Box>
  )
}
