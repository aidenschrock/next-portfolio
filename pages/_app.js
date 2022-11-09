import "../styles/globals.css";
import Layout from "./components/layout";
import NavbarComponent from "./components/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <NavbarComponent />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
