import { Carousel } from 'antd';
import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import bag from '../../assets/bag.jpg';
import jacket from '../../assets/jacket.jpg';
import shoes from '../../assets/shoes.jpg';
import { useGetProductsQuery } from '../../features/products/productApi';
import Error from '../ui/Error';
import Loading from '../ui/Loading';
const Showcase = () => {
  //fetch data
  const { isError, isLoading, data } = useGetProductsQuery();
  //useGetProduct return { data,totalCount}. here destructure data
  const { data: products, totalCount } = data || {};

  const navigate = useNavigate();

  //change carousel event
  const onChange = (currentSlide) => {
    //console.log(currentSlide);
  };

  //used for next prev button in second carousel
  const slider = useRef(null);

  let content;
  if (isLoading) {
    content = (
      <div className=" h-full flex justify-center pt-20">
        <Loading />
      </div>
    );
  }

  if (!isLoading && isError) {
    content = (
      <div className=" h-full flex justify-center pt-20">
        <Error />
      </div>
    );
  }

  if (!isLoading && !isError && products?.length !== 0) {
    content = (
      <>
        <Carousel
          slidesToShow={2}
          ref={slider}
          dots={false}
          swipeToSlide
          draggable
        >
          {products.slice(0, 3).map((item) => {
            return (
              <div
                className="px-2 h-full cursor-pointer"
                key={item.id}
                onClick={() => navigate(`/product/${item.id}`)}
              >
                <div className="overflow-hidden bg-white p-3  flex flex-col gap-4 rounded-md">
                  <div className=" h-40 flex items-center justify-center">
                    <img
                      src={item.productImage}
                      alt={item.name}
                      className=" object-fill"
                      onClick={() => navigate(`/product/${item.id}`)}
                    />
                  </div>
                  <div>
                    <h4 className="">
                      {item.name?.length < 18
                        ? `${item.name}`
                        : `${item.name.substring(0, 17)}...`}
                    </h4>
                    <h4 className=" font-semibold">${item.price}</h4>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
        <button
          onClick={() => slider.current.prev()}
          className="absolute inset-y-1/2 left-3"
        >
          <i className="text-white">
            <FaChevronLeft />
          </i>
        </button>
        <button
          onClick={() => slider.current.next()}
          className="absolute inset-y-1/2 right-3"
        >
          <i className="text-white">
            <FaChevronRight />
          </i>
        </button>
      </>
    );
  }
  return (
    <div className="rounded-md overflow-hidden flex flex-col md:flex-row gap-5 ">
      <div className="w-full md:w-[50vw] rounded-md overflow-hidden">
        <Carousel afterChange={onChange} swipeToSlide draggable autoplay>
          <div className=" h-[350px] relative">
            <img src={bag} alt="bag" className=" h-full w-full object-cover" />
            <div className=" absolute w-full h-full flex items-center justify-center flex-col gap-2 bg-slate-900/50 z-10 top-0 left-0">
              <h1 className="text-white text-3xl font-thin">Mystery Deal</h1>
              <button
                className="text-white border border-white text-lg px-4 py-2 bg-gray-900/50 rounded-md hover:bg-white hover:text-slate-900 all"
                onClick={() => navigate('/shop')}
              >
                Discover
              </button>
            </div>
          </div>
          <div className=" h-[350px] relative">
            <img
              src={shoes}
              alt="shoes"
              className=" h-full w-full object-cover"
            />
            <div className=" absolute w-full h-full flex items-center justify-center flex-col gap-2 bg-slate-900/50 z-10 top-0 left-0">
              <h1 className="text-white text-3xl font-thin">Up to 50% off</h1>
              <button
                className="text-white border border-white text-lg px-4 py-2 bg-gray-900/50 rounded-md hover:bg-white hover:text-slate-900 all"
                onClick={() => navigate('/shop')}
              >
                Shop Now
              </button>
            </div>
          </div>
          <div className=" h-[350px] relative">
            <img
              src={jacket}
              alt="jacket"
              className=" h-full w-full object-cover"
            />
            <div className=" absolute w-full h-full flex items-center justify-center flex-col gap-2 bg-slate-900/50 z-10 top-0 left-0">
              <h1 className="text-white text-3xl font-thin">New Arrival</h1>
              <button
                className="text-white border border-white text-lg px-4 py-2 bg-gray-900/50 rounded-md hover:bg-white hover:text-slate-900 all"
                onClick={() => navigate('/shop')}
              >
                Discover
              </button>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="relative bg-gradient-to-r from-sky-500 to-indigo-500 rounded-md flex-auto p-5">
        <div className="flex justify-center items-center mb-3">
          <h1 className="text-white text-3xl customFont">Deal of The Day</h1>
        </div>
        <div className="w-full md:w-[30vw] mx-auto">{content}</div>
      </div>
    </div>
  );
};

export default Showcase;
