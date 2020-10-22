const Footer = () => {
  return (
    <>
      {/* footer + newsletter */}
      <footer className="flex justify-between p-10 text-green-400 bg-green-900">
        {/* left */}
        <div className="md:w-1/2">
          <h3 className="mb-2 text-lg">Join the Newsletter!</h3>
          <form className="flex">
            <input
              type="email"
              className="w-full px-4 py-3 text-green-900 rounded-l outline-none focus:bg-green-100"
              aria-label="email address"
            />
            <button className="px-4 text-black bg-orange-500 rounded-r hover:bg-orange-700 hover:text-white">
              Join
            </button>
          </form>
        </div>
        {/* right */}
        <div className="flex items-center">
          Copyright &copy; Farm City Inc 2020
        </div>
      </footer>
    </>
  );
};

export default Footer;
