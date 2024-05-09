/* eslint-disable react/prop-types */
import { useEffect } from "react";

export const Navbar = ({ name, pag1, pag2, pag3 }) => {
    useEffect(() => {
  const menuButton = document.querySelector('#menu-button');
  const navMenu = document.querySelector('.navbar-list');
    menuButton.addEventListener('click', () => {
      navMenu.classList.toggle('hidden');
      const expanded = navMenu.classList.contains('hidden') ? 'false' : 'true';
      menuButton.setAttribute('aria-expanded', expanded);
    });
  });
  return (
    <header className="font-roboto flex justify-center items-start fixed w-full z-10">
      <nav className="bg-background text-principal w-full h-auto top-0 left-0 flex flex-row flex-wrap lg:flex-nowrap justify-between items-center px-8 py-2 shadow-md shadow-slate-600 rounded-lg opacity-80 m-3">
        <div className="logo font-large font-bold text-base sm:text-lg hover:text-secondary cursor-pointer">
          <h1>
            <a href="#">{name}</a>
          </h1>
        </div>
        <button id="menu-button" type="button">
          <svg
            className="w-6 h-6 text-principal lg:hidden"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </button>
        <ul className="navbar-list flex flex-col lg:flex-row w-full lg:w-auto justify-around items-center hidden lg:flex">
          <li className="my-5 lg:my-0">
            <a
              href="#servicios"
              className="hover:bg-secondary hover:text-text font-bold px-4 py-2 rounded-xl cursor-pointer"
            >
              {pag1}
            </a>
          </li>
          <li className="my-5 lg:my-0">
            <a
              href="#nosotros"
              className="hover:bg-secondary hover:text-text font-bold px-4 py-2 rounded-xl cursor-pointer"
            >
              {pag2}
            </a>
          </li>
          <li className="my-5 lg:my-0">
            <a
              href="#contacto"
              className="hover:bg-secondary hover:text-text font-bold px-4 py-2 rounded-xl cursor-pointer"
            >
              {pag3}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
