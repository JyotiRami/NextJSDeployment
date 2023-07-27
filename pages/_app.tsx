import "../styles/globals.css";
import type { AppProps } from "next/app";
import DashboardLayout from "../components/DashboardLayout/DashboardLayout";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apolloClient";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      </ThemeProvider>
    </ApolloProvider>
  );
}
export default MyApp;