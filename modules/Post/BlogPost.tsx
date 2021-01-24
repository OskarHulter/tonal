import HeadPost from '@/modules/Post/HeadPost'
import { Meta } from '@/types/types'
import { FC } from 'react'

type Props = {
  meta: Meta
}

const BlogPost: FC<Props> = ({ children, meta }) => {
  return (
    <>
      <HeadPost meta={meta} isBlogPost />
      <article>{children}</article>
    </>
  )
}

export default BlogPost