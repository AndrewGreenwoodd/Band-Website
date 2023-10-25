import Document, { Html, Head, Main, NextScript } from 'next/document';
import { createPortal } from 'react-dom';
import React from 'react';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <div id="overlays"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;