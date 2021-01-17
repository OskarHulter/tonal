import { MotorState, MotorUpdate } from '@/types/types'
import { FC, useContext, ReactNode, createContext } from 'react'
import { useImmer } from 'use-immer'

const defaultState: MotorState = {
  name: 'Sun Tzu'
}

const MotorStateContext = createContext<MotorState>(defaultState)
const MotorUpdateContext = createContext<MotorUpdate>({})

const MotorSalesFlow: FC<Props> = ({ children }) => {

  const [motorState, setMotorState] = useImmer<MotorState>(defaultState)

  // Replaces whole state
  //function setMotor<S>(newState: S): void {
  //  setMotorState(draft => {
  //    (draft as unknown as S) = newState
  //  })
  //}

  // Replaces a field
  function setName(newName: string): void {
    setMotorState(({ name }) => {
      name = newName
    })
  }

  return <>
    <MotorStateContext.Provider value={motorState}>
      <MotorUpdateContext.Provider
        value={{
          setName
        }}>
        {children}
      </MotorUpdateContext.Provider>
    </MotorStateContext.Provider>
  </>
}

// Global State access
// I might prefer to name all of the access hooks simply: use<Product>: useMotor
// We can also export the seperate values from motorState rather than one big object
export function useMotorSalesFlow() {
  const motorState = useContext(MotorStateContext)
  const { setName } = useContext(MotorUpdateContext)

  return {
    motorState,
    setName
  }
}

type Props = {
  children: ReactNode
}

export default MotorSalesFlow