const Card = ({ image, title, description, price }) => {
  return (
    <>
      <article className="p-4 bg-white border rounded-lg shadow-lg">
        <img className="w-24 h-auto mx-auto" src={image} alt="" />
        <div className="p-4">
          <h3 className="mt-0 mb-4 font-bold sm:text-lg md:text-xl lg:text-2xl">
            {title}
          </h3>
          <p className="text-sm text-gray-700">{description}</p>
          <h4 className="mt-4 font-bold text-right text-gray-500 line-through">
            Price: ${price}
          </h4>
          <h4 className="mt-4 font-bold text-right text-green-900">
            Now: ${(price * 0.8).toFixed(2)}
          </h4>
        </div>
      </article>
    </>
  );
};

export default Card;
