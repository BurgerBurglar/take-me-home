import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Cute animals waiting for you to take home with."
        />
        <meta name="x-robots-tag" content="all" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
