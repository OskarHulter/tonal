import { FC } from 'react'
import Layout from '../modules/Layout/Layout'
import Hero from '../modules/Hero'
import ThemeToggler from '../modules/ThemeToggler'

const Index: FC = () =>
  <Layout
    pageTitle='Oskar Hulter - Web Dev Blog'
    description='Oskar Hulters blog about web development.'
  >
    <ThemeToggler />
    <Hero />
  </Layout>

export default Index