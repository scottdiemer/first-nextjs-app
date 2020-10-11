import { useEffect, useState } from "react";
import Card from "./card";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    // const [items] = data.results;
    // setData(items);
    // setLoading(false);
  }, []);

  return { data, loading };
};
const Specials = () => {
  const { data: products, loading } = useFetch(
    "https://fakestoreapi.com/products/?limit=5"
  );

  return (
    <>
      <section className="p-20 bg-green-800 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {loading ? (
          <div>loading...</div>
        ) : (
          products.map((product) => {
            <Card key={product.id} product={product} />;
          })
        )}
      </section>
    </>
  );
};

export default Specials;
