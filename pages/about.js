import Layout from "../components/layout";
import Title from "../components/title";

const About = () => {
  return (
    <Layout
      title="About Us | Farm City Inc."
      className="flex flex-col min-h-screen bg-green-200"
    >
      <section className="p-5 pt-5 bg-green-200 sm:p-10 md:pt-10 md:p-20">
        <Title
          title="About Us"
          className="pb-10 text-xl font-bold tracking-widest text-center text-green-800 sm:text-2xl md:text-2xl lg:text-4xl xl:text-5xl"
        />
        <p className="font-sans tracking-wide text-justify text-green-800">
          Adipisicing nobis recusandae explicabo neque aperiam Blanditiis
          corrupti officia deserunt libero labore Pariatur dolor cum dicta optio
          totam! Facilis iste tempore vel eos saepe esse. Unde vitae odit
          explicabo reprehenderit fugit. Incidunt quae ipsam error obcaecati
          adipisci. Fugiat reprehenderit repellat aspernatur obcaecati magnam?
          Doloremque delectus magnam doloremque dolore eos Inventore veritatis
          deleniti nesciunt enim ut. Natus ut enim laudantium illum voluptatem.
          Neque minima odit soluta atque quo? Debitis totam repellendus facere
          recusandae dignissimos Exercitationem nostrum sapiente id quasi
          ratione Vero minus itaque sit illum quasi voluptatibus possimus? Velit
          consequuntur tempore dolor nihil illo eveniet Error nostrum eveniet
          autem placeat optio Dolorum itaque fuga vero deserunt excepturi.
          Consectetur voluptatem facere explicabo reiciendis facere. Nemo
          assumenda temporibus illo laboriosam iure? Ipsum laboriosam quod qui
          iure soluta! Illum necessitatibus debitis nesciunt sit aut. Culpa
          laborum similique dolores harum reprehenderit necessitatibus. Ad
          nostrum velit voluptate amet placeat voluptate molestias. Vero
          voluptatibus nostrum reiciendis quibusdam?
        </p>
      </section>
    </Layout>
  );
};

export default About;
