import { FC, useState } from 'react'
import { Box, Flex, Text, Button, Stack } from '@chakra-ui/react'
import Logo from './Logo'
import MenuItems from './MenuItems'
// import { CloseIcon, MenuIcon } from ".../Icons"


const Header = ({ ...rest }) => {
  const [show, setShow] = useState(false)
  const toggleMenu = () => setShow(!show)

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["red", "green", "primary.700", "primary.700"]}
      {...rest}
    >
      <Flex align="center">
        <Logo
          w="100px"
          color={["purple", "yellow", "primary.500", "primary.500"]}
        />
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <Box>Close Icon</Box> : <Box>Menu Icon</Box>}
      </Box>
      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align={["center", "center", "center", "center"]}
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItems to="/">Home</MenuItems>
          <MenuItems to="/how">How It works </MenuItems>
          <MenuItems to="/faetures">Features </MenuItems>
          <MenuItems to="/pricing">Pricing </MenuItems>
          <MenuItems to="/signup" isLast>
            <Button
              size="sm"
              rounded="md"
              color={["primary.500", "primary.500", "white", "white"]}
              bg={["white", "white", "primary.500", "primary.500"]}
              _hover={{
                bg: [
                  "primary.100",
                  "primary.100",
                  "primary.600",
                  "primary.600",
                ],
              }}
            >
              Create Account
            </Button>
          </MenuItems>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Header
