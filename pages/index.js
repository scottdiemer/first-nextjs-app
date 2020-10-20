import Layout from "../components/layout";
import Hero from "../components/hero";
import About from "../components/about";
import ImageStrip from "../components/imageStrip";
import Specials from "../components/specials";

export default function Home() {
  return (
    <>
      <Layout title="Farm City Inc." favIcon="./favicon.ico">
        <Hero />
        <About />
        <Specials />
        <ImageStrip />
      </Layout>
    </>
  );
}
