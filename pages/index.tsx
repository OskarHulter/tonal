import { FC } from 'react'
import Head from 'next/head'
import Layout from '../modules/Layout'
import { Button } from '@chakra-ui/react'
import Hero from '../modules/Hero'

const Index: FC = () =>
  <Layout>
    <Hero />
  </Layout>

export default Index