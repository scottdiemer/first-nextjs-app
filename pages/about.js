import Layout from "../components/layout";
import About from "../components/about";

const AboutPage = () => {
  return (
    <Layout
      title="About Us | Farm City Inc."
      className="flex flex-col min-h-screen bg-green-200"
    >
      <About />
    </Layout>
  );
};

export default AboutPage;
