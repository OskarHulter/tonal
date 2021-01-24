// Global State BEGIN

export type MotorState = {
  readonly name: string
}

export type MotorUpdate = {
  setName?: (_: string) => void
}

// Global State END

export type Meta = {
  title: string
  description: string
  date: string
  readTime: number
}

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

declare module '@mdx-js/react' {
  import * as React from 'react'
  type ComponentType =
    | 'a'
    | 'blockquote'
    | 'code'
    | 'del'
    | 'em'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'hr'
    | 'img'
    | 'inlineCode'
    | 'li'
    | 'ol'
    | 'p'
    | 'pre'
    | 'strong'
    | 'sup'
    | 'table'
    | 'td'
    | 'thematicBreak'
    | 'tr'
    | 'ul'
  export type Components = {
    [key in ComponentType]?: React.ComponentType<any>
  }
  export interface MDXProviderProps {
    children: React.ReactNode
    components: Components
  }
  export class MDXProvider extends React.Component<MDXProviderProps> {}
}
