import React from 'react';
import Layout from '../components/global/Layout';
import NewArrival from '../components/Home/NewArrival';
import NewsLetter from '../components/Home/NewsLetter';
import Showcase from '../components/Home/Showcase';
import TrendyProducts from '../components/Home/TrendyProducts';
import UpcomingCampaign from '../components/Home/UpcomingCampaign';

const Home = () => {
  return (
    <>
      <Layout>
        <div className="mt-5 flex flex-col gap-10">
          <Showcase />
          <UpcomingCampaign />
          <TrendyProducts />
          <NewArrival />
          <NewsLetter />
        </div>
      </Layout>
    </>
  );
};

export default Home;
