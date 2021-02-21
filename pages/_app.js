import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
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
