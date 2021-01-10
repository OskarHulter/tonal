import { FC } from 'react'
import { Flex } from '@chakra-ui/react'
import Header from './Header'
import Footer from './Footer'

const SignupForm: FC = ({ children, ...rest }) =>
  <Flex
    direction="column"
    align="center"
    maxW={{ xl: "1200px" }}
    m="0 auto"
    {...rest}
  >
    {children}
  </Flex>

export default SignupForm 