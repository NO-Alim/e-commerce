import React from 'react';
import googlePlay from '../../assets/google-play.jpg';
import logo from '../../assets/logo-white.png';
import Layout from './Layout';

const Footer = () => {
  return (
    <div className=" bg-slate-900 text-white py-10">
      <Layout>
        <div className="flex flex-col gap-10 md:gap-0 md:flex-row items-start md:items-center">
          <div className="flex-1 flex flex-col sm:flex-row gap-10">
            <div className="flex flex-col gap-5">
              <img src={logo} alt="apper" className="w-20" />
              <p>
                Largest product search engine, maximum categorized online
                shopping mall and quickest home delivery system.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-xl font-semibold">Contact Us</h1>
              <p>House #8, Road # 14, Dhanmondi, Dhaka-1209.</p>
              <p>Email: support@hello.com</p>
            </div>
          </div>
          <div className="flex-1 flex gap-5 flex-col items-center">
            <h1 className="text-xl font-semibold">Get apper App</h1>
            <img
              src={googlePlay}
              alt="google play"
              className=" w-28 rounded-md cursor-pointer border border-white"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Footer;
