import { Box, Link } from '@chakra-ui/layout'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu'
import Logo from 'assets/logo'

export default function Navbar() {
  return (
    <Box
      as="header"
      backgroundColor="white"
      py="2"
      borderBottom="1px solid rgba(0, 40, 100, 0.12)"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        w={['full', '720px', '960px', '1300px']}
        mx="auto"
        px="2"
      >
        <Logo />
        <Box>
          <Menu>
            <MenuButton as={Link} textDecoration="none">
              John Doe
            </MenuButton>
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </Box>
  )
}
