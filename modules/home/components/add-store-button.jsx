import { PlusSquareIcon } from '@chakra-ui/icons'
import { Box } from '@chakra-ui/layout'
import Link from 'next/link'

export default function AddStoreButton() {
  return (
    <Link href="/">
      <Box
        maxW={['full', '50%', '25%', '16.66666667%']}
        flex={['full', '0 0 50%', '0 0 25%', '0 0 16.66666667%']}
        m="3"
        bgColor="achbanlik.primary"
        borderRadius="8px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        color="white"
        fontWeight="bold"
        fontSize="1.5rem"
        as="a"
        cursor="pointer"
      >
        <PlusSquareIcon w={10} h={10} />
        <span>Add Store</span>
      </Box>
    </Link>
  )
}
