import Link from "next/link";

const Navbar = (props) => {
  return (
    <>
      {/* header */}
      <nav className="flex flex-col md:flex-row bg-green-900 p-4 flex justify-between items-center">
        {/* left side */}
        <div className="flex items-start md:items-center">
          <img
            width="50"
            src="https://cdn1.iconfinder.com/data/icons/casino-solid-royal-straight-flush/512/Horseshoes-512.png"
            alt="logo"
            className="mr-2"
          />
          <Link href="/">
            <a className="inline-block p-3 text-green-200 hover:text-green-100">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="inline-block p-3 text-green-200 hover:text-green-100">
              About
            </a>
          </Link>
        </div>
        {/* right side */}
        <div>
          <Link href="#">
            <a className="inline-block p-2 text-green-200 mr-2">Login</a>
          </Link>
          <Link href="#">
            <a className="inline-block py-2 px-4 text-green-900 bg-yellow-500 rounded hover:bg-yellow-400 transition ease-in duration-150">
              Sign up
            </a>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
