import { FC } from 'react'
import { Input } from '@chakra-ui/react'

const InputField: FC<Props> = ({
  inputType = 'text',
  name,
  placeholder,
  minlength = 5,
  maxlength = 40,
  isRequired = true,
  hasAutocomplete = true,
  hasAutofocus = false,
  ...rest
}) =>
  <Input
    type={inputType}
    name={name ? name : inputType}
    placeholder={placeholder ? placeholder : `enter ${name} here`}
    minlength={minlength}
    maxlength={maxlength}
    required={isRequired}
    autocomplete={hasAutocomplete ? inputType : 'off'}
    autofocus={hasAutofocus}
    size='lg'
    {...rest}
  />

type Props = {
  inputType?: string
  name?: string
  placeholder?: string
  minlength?: number
  maxlength?: number
  isRequired?: boolean
  hasAutocomplete?: boolean
  hasAutofocus?: boolean
}

export default InputField 