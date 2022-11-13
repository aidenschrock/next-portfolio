import "../styles/globals.css";
import "../styles/transition.css";
import Layout from "./components/layout";
import NavbarComponent from "./components/navbar";
import Transition from "./components/Transition";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <NavbarComponent />
      <Transition>
        <Component {...pageProps} />
      </Transition>
    </Layout>
  );
}

export default MyApp;
