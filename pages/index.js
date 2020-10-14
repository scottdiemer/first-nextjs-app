import Layout from "../components/layout";
import Hero from "../components/hero";
import ImageStrip from "../components/imageStrip";
import Specials from "../components/specials";

export default function Home() {
  return (
    <>
      <Layout title="Farm City Inc." favIcon="./favicon.ico">
        <Hero />
        <Specials />
        <ImageStrip />
      </Layout>
    </>
  );
}
