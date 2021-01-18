import React from 'react'
import Document, { Head, Main, NextScript, Html } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <head>
          <Head />
          <meta charSet="UTF-8"/>
          <meta name="description" content="My SEO React app with Next JS"/>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
            crossOrigin="anonymous" />
        </head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument