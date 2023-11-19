import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';


export default function Document() {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        {/* <meta charSet="UTF-8" /> */}
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        <meta httpEquiv="Content-Type" content="text/html" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="shortcut icon" href="/images/logo.svg" type="image/svg" />
        <link rel="apple-touch-icon" href="/images/logo.svg" type="image/svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}