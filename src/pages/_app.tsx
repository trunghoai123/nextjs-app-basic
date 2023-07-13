import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps}></Component>;
    </QueryClientProvider>
  );
};

export default App;
