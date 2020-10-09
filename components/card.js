import { useEffect, useState } from "react";

const Card = () => {
  const [product, setProduct] = useState(false);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);

  return (
    <>
      <div className="p-20 bg-green-500 grid grid-col-3 gap-4 justify-items-auto h-1/2">
        <li className="max-w-sm p-6 mb-10 list-none bg-white border rounded-lg shadow-lg">
          <img
            className="w-1/4 h-auto mx-auto h-1/4"
            src={product.image}
            alt=""
          />
          <div className="p-4">
            <h3 className="mt-0 mb-4 text-2xl font-bold">{product.title}</h3>
            <p className="text-sm text-gray-700">{product.description}</p>
            <h4 className="mt-4 font-bold">Price: {product.price}</h4>
          </div>
        </li>
      </div>
    </>
  );
};

export default Card;
