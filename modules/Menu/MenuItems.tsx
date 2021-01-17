import { Text } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'
// import Logo from '../ui/Logo'
// import { CloseIcon, MenuIcon } from '.../Icons'


const MenuItems = ({ children, isLast = false, to = '/', ...rest }) =>
  <Text
    mb={{ base: isLast ? 0 : 8, sm: 0 }}
    mr={{ base: 0, sm: isLast ? 0 : 8 }}
    display="block"
    {...rest}
  >
    <Link href={to}>{children}</Link>
  </Text>

export default MenuItems