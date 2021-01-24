import { FC } from 'react'
import Link from 'next/link'
import { Meta } from '@/types/types'
import HeadPost from '@/modules/Post/HeadPost'

type Props = {
  link: string
  meta: Meta
}

export const Post: FC<Props> = ({ link, meta }) => 
  <article>
    <HeadPost meta={meta} />
    <Link href={'/blog' + link}>
      <a>Read more →</a>
    </Link>
  </article>

