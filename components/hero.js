const Hero = () => {
  return (
    <>
      {/* hero */}
      <div className="md:flex justify-between py-20 px-10 bg-green-100 text-green-900">
        {/* left */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-2xl md:text-4xl lg:text-6xl text-black mb-6">
            Welcome to Farm City
          </h2>
          <p className="mb-6">Keep them at their peek performance!</p>

          <a
            href="#"
            className="inline-block py-3 px-6 text-lg bg-gray-300 text-gray-800 rounded-lg mr-2"
          >
            Learn More
          </a>
          <a
            href="#"
            className="inline-block py-3 px-6 text-lg bg-orange-500 rounded-lg text-gray-100 hover:bg-orange-400 hover:text-pink-700"
          >
            Get Started
          </a>
        </div>
        {/* right */}
        <div className="md:w-1/2">
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
