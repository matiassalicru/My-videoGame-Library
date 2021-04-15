import { Nav } from "../components/Nav";
import "../styles/styles.scss";
import { Provider } from "react-redux";
import store from "../store/store";
import { Sidebar } from "../components/Sidebar";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Sidebar/>
      <Nav/>

      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
