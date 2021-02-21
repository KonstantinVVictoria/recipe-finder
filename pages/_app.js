import "../styles/globals.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>FoodRex</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Quicksand:wght@700&family=Raleway&display=swap"
        rel="stylesheet"
      />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
