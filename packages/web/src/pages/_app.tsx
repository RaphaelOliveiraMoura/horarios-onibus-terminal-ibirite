import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  const disableAnalytics = process.env.NEXT_PUBLIC_DISABLE_ANALYTICS === 'true'

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

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;400;500&display=swap"
          rel="stylesheet"
        />
        {/* Google AdSense */}
        <script
          data-ad-client="ca-pub-3607857001646781"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
        {/* Google Analytics */}
        {process.browser && !disableAnalytics && (
          <>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-1BWK900E42"
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                
                  gtag('config', 'G-1BWK900E42');
                 `
              }}
            />
          </>
        )}
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
