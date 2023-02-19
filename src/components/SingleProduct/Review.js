import React from 'react';
import { BiDislike, BiLike } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';

const Review = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-3 md:gap-10">
        <div className=" w-40">
          <h1 className="mb-3 text-lg font-semibold">Susuma dey</h1>
          <div className="flex mb-1">
            <i className=" text-yellow-500">
              <FaStar />
            </i>
            <i className=" text-yellow-500">
              <FaStar />
            </i>
            <i className=" text-yellow-500">
              <FaStar />
            </i>
            <i className=" text-yellow-500">
              <FaStar />
            </i>
          </div>
          <h1 className=" text-gray-400">4 Days ago</h1>
        </div>
        <div>
          <h1 className="mb-3 text-lg font-semibold">Good, and Perfect Size</h1>
          <p className="mb-1 text-lg text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            ducimus tempore voluptatem dolores, recusandae numquam et labore
            aperiam. Quia, rerum!
          </p>
          <div className="flex gap-5">
            <div className="flex items-center gap-2 text-sm cursor-pointer hover:underline text-gray-400 hover:text-slate-900 all">
              <span>
                <i>
                  <BiLike />
                </i>
              </span>
              <span>Helpful(2)</span>
            </div>
            <div className="flex items-center gap-2 text-sm cursor-pointer hover:underline text-gray-400 hover:text-slate-900 all">
              <span>
                <i>
                  <BiDislike />
                </i>
              </span>
              <span>Unhelpful(2)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
