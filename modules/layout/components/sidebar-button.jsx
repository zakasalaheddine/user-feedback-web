import { Button } from '@chakra-ui/button'
import Icon from '@chakra-ui/icon'

const SidebarButton = ({ text, buttonIcon, isDanger, isActive, as }) => {
  return (
    <Button
      leftIcon={<Icon as={buttonIcon} />}
      variant="ghost"
      colorScheme={isActive ? 'pink' : isDanger ? 'red' : 'gray'}
      width="full"
      justifyContent="start"
      mb="3"
      as="a"
    >
      {text}
    </Button>
  )
}

export default SidebarButton
