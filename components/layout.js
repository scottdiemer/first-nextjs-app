import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ title, favIcon, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href={favIcon} type="image/x-icon" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
