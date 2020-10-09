const Footer = () => {
  return (
    <>
      {/* footer + newsletter */}
      <footer className="p-10 bg-green-900 text-green-400 flex justify-between">
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
      </footer>
    </>
  );
};

export default Footer;
