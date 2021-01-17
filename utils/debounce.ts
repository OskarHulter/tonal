import { DebouncedFunction, DebounceOptions, DebounceProcedure } from '@/types/types'


export function debounce<F extends DebounceProcedure>(
  func: F,
  waitMilliseconds = 50,
  options: DebounceOptions = {}
): DebouncedFunction<F> {
  let timeoutId: ReturnType<typeof setTimeout> | undefined
  const isImmediate = options.isImmediate ?? false
  const maxWait = options.maxWait
  let lastInvokeTime = Date.now()

  function nextInvokeTimeout() {
    if (maxWait !== undefined) {
      const timeSinceLastInvocation = Date.now() - lastInvokeTime

      if (timeSinceLastInvocation + waitMilliseconds >= maxWait) {
        return maxWait - timeSinceLastInvocation
      }
    }

    return waitMilliseconds
  }

  const debouncedFunction = function (
    this: ThisParameterType<F>,
    ...args: Parameters<F>
  ) {
    const context = this

    const invokeFunction = function () {
      timeoutId = undefined
      lastInvokeTime = Date.now()
      if (!isImmediate) {
        func.apply(context, args)
      }
    }

    const shouldCallNow = isImmediate && timeoutId === undefined

    if (timeoutId !== undefined) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(invokeFunction, nextInvokeTimeout())

    if (shouldCallNow) {
      func.apply(context, args)
    }
  };

  debouncedFunction.cancel = function () {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId)
    }
  };

  return debouncedFunction
}