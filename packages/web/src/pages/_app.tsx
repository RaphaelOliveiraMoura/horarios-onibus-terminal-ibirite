import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'presentation/styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hórarios de ônibus - terminal ibirité ATUALIZADOS</title>
        <link rel="shortcut icon" href="/img/icon-200.png" />
        <link rel="apple-touch-icon" href="/img/icon-200.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta
          name="description"
          content="Encontre todos horários de ônibus do terminal de ibirité sempre atualizados"
        />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;400;500&display=swap"
          rel="stylesheet"
        />
        {/* Google AdSense */}
        {process.browser && (
          <script
            data-ad-client="ca-pub-3607857001646781"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
        )}
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
