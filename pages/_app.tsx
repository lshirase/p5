import React from "react";
import { AppProps } from "next/app";

import "../styles/globals.css";

/**
 * app of the app
 * @return {JSX.Element} The JSX Code for the Home Page
 */
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;
