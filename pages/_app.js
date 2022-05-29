import { ThemeProvider, createTheme } from "@mui/material/styles";
import "../styles/globals.css";
import Layout from "../components/Layout";
import { CssBaseline } from "@mui/material";
import React from "react";
import store from "../app/store";
import { Provider } from "react-redux";

const outertheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    othercolor: {
      main: "#90000b",
      contrastText: "#fff",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={outertheme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
