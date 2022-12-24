import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, React } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import ("bootstrap/dist/js/bootstrap.js");
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
