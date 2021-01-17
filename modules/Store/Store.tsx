import MotorSalesFlow from './MotorSalesFlow'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/modules/Theme/theme'

const Store = ({ children }) =>
  <ChakraProvider theme={theme}>
    <MotorSalesFlow>
      {children}
    </MotorSalesFlow>
  </ChakraProvider>

export default Store