import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ReactElement } from 'react'
import '../styles/globals.css'


type nextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => JSX.Element
}

type appPropsWithLayout = AppProps & {
  Component: nextPageWithLayout
}



function MyApp({ Component, pageProps }: appPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: ReactElement) => page)
  return getLayout(<Component {...pageProps} /> )

}

export default MyApp
