import { useEffect, useState } from "react";
import SaleCard, { CardLayout } from "./card";

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
    <section className="p-20 bg-green-800 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {loading ? (
        <p className="font-bold text-green-200">Loading...</p>
      ) : (
        products.map((product, index) => (
          <CardLayout>
            <SaleCard key={index} {...product} />
          </CardLayout>
        ))
      )}
    </section>
  );
};

export default Specials;
