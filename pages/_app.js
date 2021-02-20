import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Quicksand&family=Raleway&display=swap"
        rel="stylesheet"
      />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
