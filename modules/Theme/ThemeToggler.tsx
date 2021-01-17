import { useColorMode, Box, IconButton } from '@chakra-ui/react'

export default function ThemeToggler() {
  const { toggleColorMode } = useColorMode()
  return (
    <Box textAlign="right" py={4} mr={12}>
      <IconButton
        aria-label='themeToggle'
        onClick={toggleColorMode}
        variant="ghost"
      />
    </Box>
  )
}

/* icon={colorMode === 'light' ? 'moon' : 'sun'} */