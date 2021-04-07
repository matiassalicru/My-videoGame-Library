import { Nav } from '../components/Nav';
import '../styles/styles.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp
