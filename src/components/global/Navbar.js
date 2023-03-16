import { Drawer } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import cart from '../../assets/cart.png';
import logo from '../../assets/logo.png';
import menu from '../../assets/menu.png';
import CartContainer from './CartContainer';

//page list
const pages = [
  { name: 'Home', path: '' },
  { name: 'Shop', path: 'shop' },
];
const Navbar = () => {
  //for Antd Menu Drawer
  const [openMenu, setOpenMenu] = useState(false);
  const [placementMenu, setPlacementMenu] = useState('left');

  //for Cart Drawer
  const [openCart, setOpenCart] = useState(false);
  const [placeCartMenu, setPlaceCartMenu] = useState('right');

  //cartCounter
  const { reloader } = useSelector((state) => state.localStorage);
  const [cartList, setCartList] = useState(
    JSON.parse(localStorage.getItem('cartList'))
  );
  //search input
  const [searchStr, setSearchStr] = useState('');

  //
  const navigate = useNavigate();

  //for menu
  const showMenuDrawer = () => {
    setOpenMenu(true);
  };
  const onMenuClose = () => {
    setOpenMenu(false);
  };

  //for cart
  const showCartDrawer = () => {
    setOpenCart(true);
  };

  const onCartClose = () => {
    setOpenCart(false);
  };

  //search handler

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${searchStr}`);
    setSearchStr('');
  };

  //reload
  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('cartList'));
    setCartList(list);
  }, [reloader]);

  return (
    <nav className="px-5 sm:px-14 py-3 border-b border-slate-100 flex justify-between items-center gap-5">
      <div className="flex items-center gap-5 sm:gap-10">
        <div className=" sm:hidden">
          <img src={menu} alt="menu" className="h-8" onClick={showMenuDrawer} />
        </div>
        <div>
          <Link to="/">
            <img src={logo} alt="apper" />
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
        <form
          className=" hidden lg:flex bg-slate-300 rounded-md overflow-hidden items-center justify-end "
          onSubmit={handleSearch}
        >
          <input
            type="text"
            className=" bg-slate-300 p-2 focus:outline-none"
            placeholder="e.g: shirt"
            value={searchStr}
            onChange={(e) => setSearchStr(e.target.value)}
          />
          <button className="p-2 w-20 bg-slate-900 text-white text-lg focus:outline-none text-center">
            Search
          </button>
        </form>
        <div className="relative mr-4" onClick={showCartDrawer}>
          <img src={cart} alt="cart" className="w-6 cursor-pointer" />
          <div className=" absolute w-5 h-5 rounded-md bg-slate-900 -top-3 -right-3 text-white flex items-center justify-center text-sm">
            {cartList ? cartList?.length : 0}
          </div>
        </div>
      </div>

      <Drawer
        placement={placementMenu}
        closable={true}
        onClose={onMenuClose}
        open={openMenu}
        key={placementMenu}
      >
        <div className="flex flex-col gap-5">
          <div>
            <Link to="/">
              <img src={logo} alt="apper" />
            </Link>
          </div>
          <div className=" flex flex-col gap-3">
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
      </Drawer>
      <Drawer
        placement={placeCartMenu}
        closable={true}
        onClose={onCartClose}
        open={openCart}
        key={placeCartMenu}
      >
        <CartContainer />
      </Drawer>
    </nav>
  );
};

export default Navbar;
