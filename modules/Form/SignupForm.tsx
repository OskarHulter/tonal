import { FC } from 'react'
import { Stack, InputGroup, Button } from '@chakra-ui/react'
import InputField from './InputField'

const SignupForm: FC = () =>
  <InputGroup>
    <Stack spacing={3}>
      <InputField
        inputType='email'
      />
      <InputField
        inputType='password'
        minlength={8}
      />
      <Button />
    </Stack>
  </InputGroup>


export default SignupForm 