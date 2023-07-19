import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
const queryClient = new QueryClient();
import { Manrope } from "next/font/google";

const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={manrope.className}>
        <Component {...pageProps}></Component>
      </div>
    </QueryClientProvider>
  );
};

export default App;
