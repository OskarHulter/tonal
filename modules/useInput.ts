import { useState } from 'react'

function useInput(initalValue) {
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
  onChange: (e) => void
}