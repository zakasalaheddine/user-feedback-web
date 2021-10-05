import { HamburgerIcon } from '@chakra-ui/icons'
import { Box } from '@chakra-ui/layout'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu'
import styled from '@emotion/styled'

export default function StoreCard({ name, count }) {
  return (
    <StoreCardContainer
      maxW={['full', '50%', '25%', '16.66666667%']}
      flex={['full', '0 0 50%', '0 0 25%', '0 0 16.66666667%']}
      m="3"
    >
      <StoreCardBody>{name}</StoreCardBody>
      <StoreCardFooter>
        <span className="tag">{count} responses</span>
        <Menu>
          <MenuButton as="div" className="more" textDecoration="none">
            <HamburgerIcon />
          </MenuButton>
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Delete</MenuItem>
          </MenuList>
        </Menu>
      </StoreCardFooter>
    </StoreCardContainer>
  )
}

const StoreCardContainer = styled(Box)`
  height: 200px;
  transition: all 0.3s ease-out;
  box-shadow: 0 7px 14px 0 rgb(59 65 94 / 10%), 0 3px 6px 0 rgb(0 0 0 / 7%);
  border-radius: 8px;
  border: 1px solid rgba(0, 40, 100, 0.08);
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  width: 100%;
`

const StoreCardBody = styled(Box)`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 1.5rem 1.5rem;
  position: relative;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.5;
  color: #495057;
`

const StoreCardFooter = styled(Box)`
  border-top: 1px solid rgba(0, 40, 100, 0.12);
  color: #6e7687;
  padding: 1rem 1.5rem;
  background: none;
  font-size: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .tag {
    font-size: 0.75rem;
    background-color: #e9ecef;
    border-radius: 3px;
    padding: 0 0.5rem;
    line-height: 2em;
    display: inline-flex;
    cursor: default;
    font-weight: 400;
    user-select: none;
  }
  .more {
    line-height: 0;
    font-size: 1.5rem;
    cursor: pointer;
  }
`
