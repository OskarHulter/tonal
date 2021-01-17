import { FC, ReactNode } from 'react'
import Head from 'next/head'
import { Flex } from '@chakra-ui/react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const Layout: FC<Props> = ({ pageTitle, description, children }) =>
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="Description" content={description}></meta>
      <title>{pageTitle}</title>
    </Head>
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: "1200px" }}
      m="0 auto"
    >
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </Flex>
  </>

type Props = {
  pageTitle: string
  description: string
  children: ReactNode
}

export default Layout