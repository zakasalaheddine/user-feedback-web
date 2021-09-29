import { Button } from '@chakra-ui/button'
import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Box } from '@chakra-ui/layout'
import styled from '@emotion/styled'
import Logo from '../../assets/logo'

export default function LoginPage() {
  return (
    <Box
      bgColor="achbanlik.background"
      h="100vh"
      w="100vw"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box w={['22rem', '27rem']}>
        <Logo />
        <FormContainer>
          <h2>Login to Achbanlik</h2>
          <FormControl id="email" mb="1rem">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <FormControl id="password" mb="1rem">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>

          <Button w="full" variant="primary">
            Sign in
          </Button>
        </FormContainer>
      </Box>
    </Box>
  )
}

const FormContainer = styled(Box)`
  background-color: white;
  padding: 2rem;
  box-shadow: 0 7px 14px 0 rgb(59 65 94 / 10%), 0 3px 6px 0 rgb(0 0 0 / 7%);
  border-radius: 8px;
  border: 1px solid rgba(0, 40, 100, 0.08);
  width: 100%;
  h2 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1.5rem;
  }
`
