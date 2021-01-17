import { ChangeEvent, useState } from 'react'

function useInput(initalValue: string = '') {

  const [value, setValue] = useState(initalValue)

  const reset = () => {
    setValue(initalValue)
  }

  const bind: Bind = {
    value,
    onChange: ({ target }) => setValue(target.value)
  }

  return [value, bind, reset]
}

export default useInput


type Bind = {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export type State = Record<string | number | symbol, unknown>
export type PartialState<T extends State> =
  | Partial<T>
  | ((state: T) => Partial<T>)
export type GetState<T extends State> = () => T
export type SetState<T extends State> = (
  partial: PartialState<T>,
  replace?: boolean
) => void