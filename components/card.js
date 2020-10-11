export const CardLayout = ({ children }) => {
  return (
    <article className="p-4 bg-white border rounded-lg shadow-lg">
      {children}
    </article>
  );
};

export const Card = ({ title, description, children }) => {
  return (
    <>
      <div className="p-4">
        <h3 className="mt-0 mb-4 font-bold sm:text-lg md:text-xl lg:text-2xl">
          {title}
        </h3>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
      {children}
    </>
  );
};

export const ImageCard = ({ image, title, description, children }) => {
  return (
    <>
      <img className="w-24 h-auto mx-auto" src={image} alt="" />
      <Card title={title} description={description}>
        {children}
      </Card>
    </>
  );
};

const SaleCard = ({ image, title, description, price }) => {
  return (
    <>
      <ImageCard image={image} title={title} description={description}>
        <h4 className="mt-4 font-bold text-right text-gray-500 line-through">
          Price: ${price.toFixed(2)}
        </h4>
        <h4 className="mt-4 font-bold text-right text-green-900">
          Now: ${(price * 0.8).toFixed(2)}
        </h4>
      </ImageCard>
    </>
  );
};

export default SaleCard;
