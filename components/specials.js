import { useEffect, useState } from "react";
import SaleCard, { CardLayout } from "./card";
import Title from "./title";

const Specials = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    async function getProducts() {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/?limit=10"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getProducts();
  }, []);

  return (
    <section className="p-5 pt-5 bg-green-100 sm:p-10 md:pt-10 md:p-20">
      <Title
        title="Specials"
        className="pb-10 text-xl font-bold tracking-widest text-center text-green-800 sm:text-2xl md:text-2xl lg:text-4xl xl:text-5xl"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {loading ? (
          <p className="font-bold text-green-800">Loading...</p>
        ) : (
          products.map((product, index) => (
            <CardLayout key={index}>
              <SaleCard {...product} />
            </CardLayout>
          ))
        )}
      </div>
    </section>
  );
};

export default Specials;
