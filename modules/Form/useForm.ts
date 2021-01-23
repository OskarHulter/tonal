import { ChangeEvent, useEffect, useState } from 'react'
import { useImmer } from 'use-immer'
import { useMotorSalesFlow } from '../Store/MotorSalesFlow'

type Error = {
  message: string
}

export type FormErrorMessages = {
  requiredMessage: (name: string) => string
  invalidMessage: (name: string) => string
  minLengthMessage: ({ name, minLength: number }) => string
  maxLengthMessage: ({ name: string, maxLength: number }) => string
}

const emailRegExp = /\S+@\S+\.\S+/
const messages: FormErrorMessages = {
  requiredMessage: (name) => `${name} is required`,
  invalidMessage: name => `${name} is invalid`,
  minLengthMessage: ({ name, minLength }) => `${name} needs to be more than ${minLength} characters`,
  maxLengthMessage: ({ name, maxLength }) => `${name} needs to be less than ${maxLength} characters`,
}

export function validateField(field: TextField, options: inputOptions = defaultInputOptions): string {
  const { name, value } = field
  const { maxLength, minLength, regExp, initialMessage } = options

  let error: Error = {
    message: initialMessage
  }

  if (!value) error.message = messages.requiredMessage(name)
  else if (regExp)
    if (!regExp.test(value)) error.message = messages.invalidMessage(name)
    else if (minLength)
      if (value.length < minLength) error.message = messages.minLengthMessage({ name, minLength })
      else if (maxLength)
        if (value.length > maxLength) error.message = messages.maxLengthMessage({ name, maxLength })

  return error.message
}

type UseFieldValidation = {
  error: Error
  updateErrorMessage: () => void
}

export function useValidateField(field: TextField, options: inputOptions = defaultInputOptions): UseFieldValidation {
  const { initialMessage } = options

  const [error, setError] = useImmer<Error>({ message: initialMessage })

  function updateErrorMessage() {
    setError(draft => {
      draft.message = validateField(field, options)
    })
  }

  return {
    error,
    updateErrorMessage
  }
}

type TextField = {
  name: 'email' | 'password'
  value: string
}

const defaultField: TextField = {
  name: 'email',
  value: '',
}

type UseInput = [
  field: TextField,
  error: Error,
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
  reset: () => void,
]

type inputOptions = {
  maxLength: number
  minLength: number
  regExp: RegExp
  initialMessage: string
}

const defaultInputOptions: inputOptions = {
  maxLength: 0,
  minLength: 0,
  regExp: emailRegExp,
  initialMessage: ''
}

function useInput(
  initialValue: TextField = defaultField,
  options: inputOptions = defaultInputOptions,
): UseInput {

  const [field, setField] = useImmer<TextField>(initialValue)
  const [isValid, setIsValid] = useState(false)
  const { error, updateErrorMessage } = useValidateField(field, options)

  function update(newState: TextField) {
    setField((draft) => {
      draft.name = newState.name
      draft.value = newState.value
    })
  }
  // errors.email && <p>{errors.email}</p>
  function reset() {
    setField((draft) => {
      draft.name = initialValue.name
      draft.value = initialValue.value
    })
  }

  function handleChange({ target }) {
    const { name, value, min } = target
    update({ name, value })
  }
  // handle subit ska ersättas, lämnar den bara här som ett exempel på hur den kan ändra en flagga för att trigga en useEffect
  function handleSubmit(): void {
    updateErrorMessage()
    setIsValid(true)
  }
  const { setName } = useMotorSalesFlow()

  useEffect(() => {
    if (!error.message && isValid) {
      setName(field.value)
    }
  }, [error.message, isValid])

  return [
    field,
    error,
    handleChange,
    reset,
  ]
}

export default useInput
