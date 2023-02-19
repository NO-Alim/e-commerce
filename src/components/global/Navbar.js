import React from 'react';
import { Link } from 'react-router-dom';
import cart from '../../assets/cart.png';
import menu from '../../assets/menu.png';

const Navbar = () => {
  const pages = [
    { name: 'Home', path: '' },
    { name: 'Shop', path: 'shop' },
    { name: 'About', path: 'about' },
    { name: 'Contact', path: 'contact' },
  ];
  return (
    <nav className="px-5 sm:px-14 py-3 border-b border-slate-100 flex justify-between items-center gap-5">
      <div className="flex items-center gap-5 sm:gap-10">
        <div className=" sm:hidden">
          <img src={menu} alt="menu" className="h-8" />
        </div>
        <div>
          <Link to="/">
            <h1 className="text-2xl font-semibold">E-valy</h1>
          </Link>
        </div>
        <div className="gap-5 hidden sm:flex">
          {pages.map((item, ind) => {
            return (
              <Link
                to={`/${item.path}`}
                key={ind}
                className=" capitalize text-lg font-semibold"
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="gap-10 flex items-center flex-1 justify-end">
        <form className=" hidden lg:flex bg-slate-300 rounded-md overflow-hidden items-center justify-end ">
          <input
            type="text"
            className=" bg-slate-300 p-2 focus:outline-none"
            placeholder="e.g: shirt"
          />
          <button className="p-2 w-20 bg-slate-900 text-white text-lg focus:outline-none text-center">
            Search
          </button>
        </form>
        <div className="relative mr-4">
          <img src={cart} alt="cart" className="w-6 cursor-pointer" />
          <div className=" absolute w-5 h-5 rounded-md bg-slate-900 -top-3 -right-3 text-white flex items-center justify-center text-sm">
            12
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
