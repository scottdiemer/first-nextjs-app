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
      <div className="p-20 bg-green-800 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <li className="max-w-sm p-6 mb-10 list-none bg-white border rounded-lg shadow-lg">
          <img
            className="w-1/4 h-auto mx-auto h-1/4"
            src={product.image}
            alt=""
          />
          <div className="p-4">
            <h3 className="mt-0 mb-4 text-2xl font-bold">{product.title}</h3>
            <p className="text-sm text-gray-700">{product.description}</p>
            <h4 className="mt-4 font-bold text-right text-gray-500">
              Price: ${product.price}
            </h4>
            <h4 className="mt-4 font-bold text-right text-green-900">
              Now: ${(product.price * 0.8).toFixed(2)}
            </h4>
          </div>
        </li>
        <li className="max-w-sm p-6 mb-10 list-none bg-white border rounded-lg shadow-lg">
          <img
            className="w-1/4 h-auto mx-auto h-1/4"
            src={product.image}
            alt=""
          />
          <div className="p-4">
            <h3 className="mt-0 mb-4 text-2xl font-bold">{product.title}</h3>
            <p className="text-sm text-gray-700">{product.description}</p>
            <h4 className="mt-4 font-bold text-right text-gray-500">
              Price: ${product.price}
            </h4>
            <h4 className="mt-4 font-bold text-right text-green-900">
              Now: ${(product.price * 0.8).toFixed(2)}
            </h4>
          </div>
        </li>
        <li className="max-w-sm p-6 mb-10 list-none bg-white border rounded-lg shadow-lg">
          <img
            className="w-1/4 h-auto mx-auto h-1/4"
            src={product.image}
            alt=""
          />
          <div className="p-4">
            <h3 className="mt-0 mb-4 text-2xl font-bold">{product.title}</h3>
            <p className="text-sm text-gray-700">{product.description}</p>
            <h4 className="mt-4 font-bold text-right text-gray-500">
              Price: ${product.price}
            </h4>
            <h4 className="mt-4 font-bold text-right text-green-900">
              Now: ${(product.price * 0.8).toFixed(2)}
            </h4>
          </div>
        </li>
        <li className="max-w-sm p-6 mb-10 list-none bg-white border rounded-lg shadow-lg">
          <img
            className="w-1/4 h-auto mx-auto h-1/4"
            src={product.image}
            alt=""
          />
          <div className="p-4">
            <h3 className="mt-0 mb-4 text-2xl font-bold">{product.title}</h3>
            <p className="text-sm text-gray-700">{product.description}</p>
            <h4 className="mt-4 font-bold text-right text-gray-500">
              Price: ${product.price}
            </h4>
            <h4 className="mt-4 font-bold text-right text-green-900">
              Now: ${(product.price * 0.8).toFixed(2)}
            </h4>
          </div>
        </li>
        <li className="max-w-sm p-6 mb-10 list-none bg-white border rounded-lg shadow-lg">
          <img
            className="w-1/4 h-auto mx-auto h-1/4"
            src={product.image}
            alt=""
          />
          <div className="p-4">
            <h3 className="mt-0 mb-4 text-2xl font-bold">{product.title}</h3>
            <p className="text-sm text-gray-700">{product.description}</p>
            <h4 className="mt-4 font-bold text-right text-gray-500">
              Price: ${product.price}
            </h4>
            <h4 className="mt-4 font-bold text-right text-green-900">
              Now: ${(product.price * 0.8).toFixed(2)}
            </h4>
          </div>
        </li>
        <li className="max-w-sm p-6 mb-10 list-none bg-white border rounded-lg shadow-lg">
          <img
            className="w-1/4 h-auto mx-auto h-1/4"
            src={product.image}
            alt=""
          />
          <div className="p-4">
            <h3 className="mt-0 mb-4 text-2xl font-bold">{product.title}</h3>
            <p className="text-sm text-gray-700">{product.description}</p>
            <h4 className="mt-4 font-bold text-right text-gray-500">
              Price: ${product.price}
            </h4>
            <h4 className="mt-4 font-bold text-right text-green-900">
              Now: ${(product.price * 0.8).toFixed(2)}
            </h4>
          </div>
        </li>
        <li className="max-w-sm p-6 mb-10 list-none bg-white border rounded-lg shadow-lg">
          <img
            className="w-1/4 h-auto mx-auto h-1/4"
            src={product.image}
            alt=""
          />
          <div className="p-4">
            <h3 className="mt-0 mb-4 text-2xl font-bold">{product.title}</h3>
            <p className="text-sm text-gray-700">{product.description}</p>
            <h4 className="mt-4 font-bold text-right text-gray-500">
              Price: ${product.price}
            </h4>
            <h4 className="mt-4 font-bold text-right text-green-900">
              Now: ${(product.price * 0.8).toFixed(2)}
            </h4>
          </div>
        </li>
        <li className="max-w-sm p-6 mb-10 list-none bg-white border rounded-lg shadow-lg">
          <img
            className="w-1/4 h-auto mx-auto h-1/4"
            src={product.image}
            alt=""
          />
          <div className="p-4">
            <h3 className="mt-0 mb-4 text-2xl font-bold">{product.title}</h3>
            <p className="text-sm text-gray-700">{product.description}</p>
            <h4 className="mt-4 font-bold text-right text-gray-500">
              Price: ${product.price}
            </h4>
            <h4 className="mt-4 font-bold text-right text-green-900">
              Now: ${(product.price * 0.8).toFixed(2)}
            </h4>
          </div>
        </li>
        <li className="max-w-sm p-6 mb-10 list-none bg-white border rounded-lg shadow-lg">
          <img
            className="w-1/4 h-auto mx-auto h-1/4"
            src={product.image}
            alt=""
          />
          <div className="p-4">
            <h3 className="mt-0 mb-4 text-2xl font-bold">{product.title}</h3>
            <p className="text-sm text-gray-700">{product.description}</p>
            <h4 className="mt-4 font-bold text-right text-gray-500">
              Price: ${product.price}
            </h4>
            <h4 className="mt-4 font-bold text-right text-green-900">
              Now: ${(product.price * 0.8).toFixed(2)}
            </h4>
          </div>
        </li>
        <li className="max-w-sm p-6 mb-10 list-none bg-white border rounded-lg shadow-lg">
          <img
            className="w-1/4 h-auto mx-auto h-1/4"
            src={product.image}
            alt=""
          />
          <div className="p-4">
            <h3 className="mt-0 mb-4 text-2xl font-bold">{product.title}</h3>
            <p className="text-sm text-gray-700">{product.description}</p>
            <h4 className="mt-4 font-bold text-right text-gray-500">
              Price: ${product.price}
            </h4>
            <h4 className="mt-4 font-bold text-right text-green-900">
              Now: ${(product.price * 0.8).toFixed(2)}
            </h4>
          </div>
        </li>
        <li className="max-w-sm p-6 mb-10 list-none bg-white border rounded-lg shadow-lg">
          <img
            className="w-1/4 h-auto mx-auto h-1/4"
            src={product.image}
            alt=""
          />
          <div className="p-4">
            <h3 className="mt-0 mb-4 text-2xl font-bold">{product.title}</h3>
            <p className="text-sm text-gray-700">{product.description}</p>
            <h4 className="mt-4 font-bold text-right text-gray-500">
              Price: ${product.price}
            </h4>
            <h4 className="mt-4 font-bold text-right text-green-900">
              Now: ${(product.price * 0.8).toFixed(2)}
            </h4>
          </div>
        </li>
      </div>
    </>
  );
};

export default Card;
