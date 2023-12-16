import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { Provider } from "react-redux";

import { store } from "@/redux/store";
import ErrorBoundary from "@/components/hoc/ErrorBoundries";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress />
      <Provider store={store}>
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      </Provider>
    </>
  );
}
