import { FC } from 'react'
import Hero from '@/modules/Hero/Hero'
import ThemeToggler from '@/modules/Theme/ThemeToggler'
import { posts } from '@/utils/getAllPosts'
import { Post } from '@/modules/Post/Post'

const Index: FC = () =>
  <>
    <ThemeToggler />
    <Hero />
    {posts.map(({ link, meta })=>
      <Post 
        key={link} 
        link={link} 
        meta={meta}
      />
    )}
  </>




export default Index