const ImageStrip = (props) => {
  return (
    <>
      {/* features */}
      <div className="px-10 py-16 text-center text-white bg-green-700 md:flex">
        <div className="mr-2 text-center">
          <img
            src="https://images.unsplash.com/photo-1553284965-e2815db2e5a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt=""
            className="w-full mb-4 border-2 border-green-100 border-solid rounded"
          />
          <p>Horses</p>
        </div>
        <div className="mt-8 mr-2 text-center">
          <img
            src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt=""
            className="w-full mb-4 border-2 border-green-100 border-solid rounded"
          />
          <p>Dogs</p>
        </div>
        <div className="mr-2 text-center">
          <img
            src="https://images.unsplash.com/photo-1527416876370-fb74d128c3dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt=""
            className="w-full mb-4 border-2 border-green-100 border-solid rounded"
          />
          <p>Cats</p>
        </div>
        <div className="mt-8 mr-2 text-center">
          <img
            src="https://images.unsplash.com/photo-1597999966821-50aa60e5c7be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
            alt=""
            className="w-full mb-4 border-2 border-green-100 border-solid rounded"
          />
          <p>Chickens</p>
        </div>
      </div>
    </>
  );
};

export default ImageStrip;
