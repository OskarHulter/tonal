import { FC } from 'react'
import { Flex } from '@chakra-ui/react'

const Main: FC = ({ children, ...rest }) =>
  <Flex
    as='main'
    align='center'
    justify='space-between'
    wrap='wrap'
    w='100%'
    mb={8}
    p={8}
    bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
    color={['yellow', 'green', 'primary.700', 'primary.700']}
    {...rest}
  >
    <Flex align='center'>
      {children}
    </Flex>
  </Flex>

export default Main 
