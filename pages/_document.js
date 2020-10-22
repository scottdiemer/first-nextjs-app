import Document, { Html, Head, Main, NextScript } from "next/document";

// Overrides Document to allow lang attribute for accessibility
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
