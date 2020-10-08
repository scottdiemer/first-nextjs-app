import Head from "next/head";

export default function Home() {
  return (
    <>
      {/* header */}
      <div className="flex flex-col md:flex-row bg-green-900 p-4 flex justify-between items-center">
        {/* left side */}
        <div className="flex items-start md:items-center">
          <img
            width="50"
            src="https://cdn1.iconfinder.com/data/icons/casino-solid-royal-straight-flush/512/Horseshoes-512.png"
            alt="logo"
            className="mr-2"
          />
          <a
            href="#"
            className="inline-block p-3 text-green-200 hover:text-green-100"
          >
            Home
          </a>
          <a
            href="#"
            className="inline-block p-3 text-green-200 hover:text-green-100"
          >
            About
          </a>
        </div>
        {/* right side */}
        <div>
          <a href="#" className="inline-block p-2 text-green-200 mr-2">
            Login
          </a>
          <a
            href="#"
            className="inline-block py-2 px-4 text-green-700 bg-yellow-500 rounded hover:bg-yellow-400 hover:text-green-800 transition ease-in duration-150"
          >
            Sign up
          </a>
        </div>
      </div>
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
      {/* footer + newsletter */}
      <div className="p-10 bg-green-900 text-green-400 flex justify-between">
        {/* left */}
        <div className="md:w-1/2">
          <h3 className="text-lg mb-2">Join the Newsletter!</h3>
          <form className="flex">
            <input
              type="email"
              className="w-full rounded-l py-3 px-4 outline-none text-green-900 focus:bg-green-100"
            />
            <button className="bg-orange-500 hover:bg-orange-700 text-orange-900 hover:text-orange-400 rounded-r px-4">
              Join
            </button>
          </form>
        </div>
        {/* right */}
        <div className="flex items-center">
          Copyright &copy; Farm City Inc 2020
        </div>
      </div>
    </>
  );
}
