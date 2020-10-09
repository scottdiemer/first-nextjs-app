import Layout from "../components/layout";
import Hero from "../components/hero";
import ImageStrip from "../components/imageStrip";
import Card from "../components/card";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Card />
        <ImageStrip />
      </Layout>
    </>
  );
}
