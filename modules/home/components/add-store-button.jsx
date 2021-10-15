import { PlusSquareIcon } from '@chakra-ui/icons'
import { Box } from '@chakra-ui/layout'
import styled from '@emotion/styled'
import Link from 'next/link'

export default function AddStoreButton() {
  return (
    <StyledAddButton
      maxW={['full', '50%', '25%', '16.66666667%']}
      flex={['full', '0 0 50%', '0 0 25%', '0 0 16.66666667%']}
      m="3"
      bgColor="achbanlik.primary"
    >
      <Link href="/add-store">
        <a>
          <PlusSquareIcon w={10} h={10} />
          <span>Add Store</span>
        </a>
      </Link>
    </StyledAddButton>
  )
}

const StyledAddButton = styled(Box)`
  height: 200px;
  transition: all 0.3s ease-out;
  box-shadow: 0 7px 14px 0 rgb(59 65 94 / 10%), 0 3px 6px 0 rgb(0 0 0 / 7%);
  border-radius: 8px;
  border: 1px solid rgba(0, 40, 100, 0.08);
  color: #fff;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
  width: 100%;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
  }
`
