import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ title, favIcon, className, children }) => {
  return (
    <div className={className}>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href={favIcon} type="image/x-icon" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
