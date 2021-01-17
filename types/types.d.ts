// Global State BEGIN

export type MotorState = {
  readonly name: string
}

export type MotorUpdate = {
  setName?: (_: string) => void
}

// Global State END

// Utils BEGIN

export type DebounceProcedure = (...args: any[]) => void

export type DebounceOptions = {
  isImmediate?: boolean
  maxWait?: number
}

export interface DebouncedFunction<F extends DebounceProcedure> {
  (this: ThisParameterType<F>, ...args: Parameters<F>): void
  cancel: () => void
}

// Utils END
