const Hero = () => {
  return (
    <>
      {/* hero */}
      <div className="justify-between h-screen px-10 py-20 text-green-900 bg-green-100 md:flex">
        {/* left */}
        <div className="flex flex-col justify-center mb-10 md:w-1/2 md:mb-0">
          <h1 className="mb-6 text-2xl text-black md:text-4xl lg:text-6xl">
            Welcome to Farm City
          </h1>
          <p className="mb-6">Keep them at their peek performance!</p>

          <div>
            <a
              href="#"
              className="inline-block px-6 py-3 mr-2 text-lg text-gray-800 bg-gray-300 rounded-lg shadow-md"
            >
              Learn More
            </a>
            <a
              href="#"
              className="inline-block px-6 py-3 text-lg text-gray-100 bg-orange-500 rounded-lg shadow-md hover:bg-orange-400 hover:text-pink-700"
            >
              Get Started
            </a>
          </div>
        </div>
        {/* right */}
        <div className="my-auto md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1600792178703-43239f15b6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
            alt="Peak Performance"
            className="w-full"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
