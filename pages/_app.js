import { Nav } from "../components/Nav";
import "../styles/styles.scss";
import { Provider } from "react-redux";
import store from "../store/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Nav />

      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
