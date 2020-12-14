import "../styles/globals.css";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { createStore } from "redux";
import rootReducer from "../common/store";
import Layout from "../components/Layout";
import theme from "../styles/media";

const store = createStore(rootReducer);
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
