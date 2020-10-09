const ImageStrip = (props) => {
  return (
    <>
      {/* features */}
      <div className="md:flex py-16 px-10 bg-green-700 text-green-200 text-center">
        <div className="mr-2 text-center">
          <img
            src="https://images.unsplash.com/photo-1553284965-e2815db2e5a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt=""
            className="w-full mb-4 rounded border-solid border-2 border-green-200"
          />
          <p>Horses</p>
        </div>
        <div className="mr-2 text-center mt-8">
          <img
            src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt=""
            className="w-full mb-4 rounded border-solid border-2 border-green-200"
          />
          <p>Dogs</p>
        </div>
        <div className="mr-2 text-center">
          <img
            src="https://images.unsplash.com/photo-1527416876370-fb74d128c3dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt=""
            className="w-full mb-4 rounded border-solid border-2 border-green-200"
          />
          <p>Cats</p>
        </div>
        <div className="mr-2 text-center mt-8">
          <img
            src="https://images.unsplash.com/photo-1597999966821-50aa60e5c7be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
            alt=""
            className="w-full mb-4 rounded border-solid border-2 border-green-200"
          />
          <p>Chickens</p>
        </div>
      </div>
    </>
  );
};

export default ImageStrip;
