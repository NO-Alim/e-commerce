import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const NewsLetter = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 my-10">
        <div className="flex flex-col gap-5 flex-1 items-center">
          <h1 className="text-3xl font-bold">Shop Social</h1>
          <p className="w-1/2 text-center text-lg  text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            quibusdam facere in illum maxime!
          </p>
          <div className="flex gap-2 items-center justify-center">
            <div className=" cursor-pointer">
              <i className="text-3xl">
                <FaFacebook />
              </i>
            </div>
            <div className=" cursor-pointer">
              <i className="text-3xl">
                <FaTwitter />
              </i>
            </div>
            <div className=" cursor-pointer">
              <i className="text-3xl">
                <FaInstagram />
              </i>
            </div>
            <div className=" cursor-pointer">
              <i className="text-3xl">
                <FaYoutube />
              </i>
            </div>
          </div>
        </div>
        <div className="w-[1px] min-h-full bg-slate-400 hidden md:block"></div>
        <div className="flex flex-col gap-5 flex-1 items-center">
          <h1 className="text-3xl font-bold">Get The Latest Deals</h1>
          <p className="w-1/2 text-center text-lg  text-gray-600">
            and <br /> receive $20 coupon for first shopping
          </p>
          <form className=" hidden lg:flex bg-slate-300 rounded-md overflow-hidden items-center justify-end ">
            <input
              type="emain"
              className=" bg-slate-300 p-2 focus:outline-none"
              placeholder="someone@gmail.com"
            />
            <button
              type="submit"
              className="p-2 w-20 bg-slate-900 text-white text-lg focus:outline-none text-center"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
