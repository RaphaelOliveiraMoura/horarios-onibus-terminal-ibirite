import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hórarios de ônibus - terminal ibirité ATUALIZADOS</title>
        <link rel="shortcut icon" href="/img/icon-200.png" />
        <link rel="apple-touch-icon" href="/img/icon-200.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
        <meta
          name="description"
          content="Encontre todos horários de ônibus do terminal de ibirité sempre atualizados"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
