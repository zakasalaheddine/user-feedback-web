import { Box } from '@chakra-ui/layout'
import SidebarButton from './sidebar-button'
import { MdOutlineArrowBack } from 'react-icons/md'
import Link from 'next/link'

export default function AddStoreSidebar() {
  return (
    <Box width={['full', '16.66666667%']} flex={['auto', '0 0 16.66666667%']}>
      <Link href="/">
        <a>
          <SidebarButton text="Back" buttonIcon={MdOutlineArrowBack} />
        </a>
      </Link>
    </Box>
  )
}
