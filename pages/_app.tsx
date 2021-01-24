import Store from '@/modules/Store/Store'
import Layout from '@/modules/Layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Store>
      <Layout
        pageTitle='Oskar Hulter - Web Dev Blog'
        description='Oskar Hulters blog about web development.'
      >
        <Component {...pageProps} />
      </Layout>

    </Store>
  )
}

export default MyApp
