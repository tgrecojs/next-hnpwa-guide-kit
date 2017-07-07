import Document, { Head, Main, NextScript } from 'next/document'
import ServiceWorker from './service-worker'
import { extractCritical } from 'emotion/server'
import { injectGlobal } from 'emotion'

injectGlobal`
  body {
    margin: 0;
    font-family: Helvetica, sans-serif;
  }


  ul {
    padding: 8px;
  }
`

export default class extends Document {
  static getInitialProps ({ renderPage }) {
    const page = renderPage()
    const styles = extractCritical(page.html)
    return { ...page, ...styles }
  }

  constructor (props) {
    super(props)
    const { __NEXT_DATA__, ids } = props
    if (ids) {
      __NEXT_DATA__.ids = this.props.ids
    }
  }

  render () {
    const { __NEXT_DATA__ } = this.context._documentProps.__NEXT_DATA__;
    const buildStats = __NEXT_DATA__.buildStats
    const assetPrefix = __NEXT_DATA__.assetPrefix
    const buildId = __NEXT_DATA__.buildId

    const filename = 'styles.css'
    const hash = buildStats ? buildStats[filename].hash : buildId

    return (
      <html lang='en'>
        <Head>
          <meta charset='utf-8' />
          <meta http-equiv='X-UA-Compatible' content='IE=edge' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='theme-color' content='#000000' />
          <link rel='icon' href='/static/favicon.ico' />
          <link rel='manifest' href='/manifest.json' />
          <title>HNPWA with emotion and Next.js</title>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
          <link
            rel='stylesheet'
            type='text/css'
            href={`${assetPrefix}/_next/${hash}/${filename}`}
          />
        </Head>
        <body className='custom_class'>
          <Main />
          <NextScript />
          <ServiceWorker />
        </body>
      </html>
    )
  }
}
