import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      {/* header */}
      <div className="bg-green-700 p-4 flex justify-between items-center">
        {/* left side */}
        <div className="flex items-center">
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
      {/* features */}
      {/* footer + newsletter */}
    </>
  );
}
