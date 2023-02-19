import React from 'react';
import filter from '.././assets/cart.png';
import Layout from '../components/global/Layout';

const About = () => {
  return (
    <Layout>
      <div className="py-10 space-y-10">
        <div className=" space-y-5">
          <h1 className="text-center text-3xl font-semibold">Who We Are?</h1>
          <p className="text-lg text-center text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            dicta aperiam suscipit vitae ab quo, animi dolores, totam numquam
            ipsa saepe. Iste ea quo facere. Nam omnis enim doloremque natus
            blanditiis quaerat explicabo, fuga dolores delectus quod reiciendis
            id dicta, soluta, quos architecto nisi itaque iste distinctio!
            Tenetur, a esse!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className=" col-span-1 text-center space-y-2">
            <img src={filter} alt="" className="mx-auto w-12" />
            <h2 className="text-xl font-semibold">Design Quality</h2>
            <p className="text-center text-lg text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
              nemo labore temporibus deserunt corporis.
            </p>
          </div>
          <div className=" col-span-1 text-center space-y-2">
            <img src={filter} alt="" className="mx-auto w-12" />
            <h2 className="text-xl font-semibold">Design Quality</h2>
            <p className="text-center text-lg text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
              nemo labore temporibus deserunt corporis.
            </p>
          </div>
          <div className=" col-span-1 text-center space-y-2">
            <img src={filter} alt="" className="mx-auto w-12" />
            <h2 className="text-xl font-semibold">Design Quality</h2>
            <p className="text-center text-lg text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
              nemo labore temporibus deserunt corporis.
            </p>
          </div>
          <div className=" col-span-1 text-center space-y-2">
            <img src={filter} alt="" className="mx-auto w-12" />
            <h2 className="text-xl font-semibold">Design Quality</h2>
            <p className="text-center text-lg text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
              nemo labore temporibus deserunt corporis.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
