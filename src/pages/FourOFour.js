import React from 'react';
import Layout from '../components/global/Layout';

const FourOFour = () => {
  return (
    <Layout>
      <div className=" min-h-[70vh] flex items-center justify-center flex-col">
        <h1 className=" text-5xl font-semibold text-red-500">404</h1>
        <h4 className="text-2xl font-semibold">Page Not Found</h4>
      </div>
    </Layout>
  );
};

export default FourOFour;
