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

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
