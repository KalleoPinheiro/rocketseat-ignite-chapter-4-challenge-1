import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

import { ColorModeScript } from "@chakra-ui/react"

import { customTheme } from 'styles/theme'


class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html lang='en-US'>
        <Head />
        <body>
          <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument