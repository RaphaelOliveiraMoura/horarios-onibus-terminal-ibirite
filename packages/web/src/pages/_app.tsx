import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'presentation/styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hórarios de ônibus - terminal ibirité</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
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
