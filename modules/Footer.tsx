import { FC, useState } from 'react'
import { Box, Flex, Text, Button, Stack } from '@chakra-ui/react'

const Footer = ({ ...rest }) =>
  <Flex
    as="footer"
    align="center"
    justify="space-between"
    wrap="wrap"
    w="100%"
    mb={8}
    p={8}
    bg={["primary.500", "primary.500", "transparent", "transparent"]}
    color={["white", "white", "primary.700", "primary.700"]}
    {...rest}
  >
    <Flex align="center">
      copywrite
      </Flex>
  </Flex>

export default Footer
