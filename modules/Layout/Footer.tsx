import { FC } from 'react'
import { Flex } from '@chakra-ui/react'

const Footer: FC = ({ ...rest }) =>
  <Flex
    as="footer"
    align="center"
    justify="space-between"
    wrap="wrap"
    w="100%"
    mb={8}
    p={8}
    bg={["primary.500", "primary.500", "transparent", "transparent"]}
    color={["red", "red", "primary.700", "primary.700"]}
    {...rest}
  >
    <Flex align="center">
      copywrite
    </Flex>
  </Flex>

export default Footer
