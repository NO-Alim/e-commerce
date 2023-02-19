import React from 'react';
import CampaignCart from './CampaignCart';

const UpcomingCampaign = () => {
  return (
    <div className="bg-slate-900/5 rounded-md p-5">
      <div className=" space-y-5">
        <h1 className="text-3xl">Upcoming Campaign</h1>
        <div className="flex gap-5 overflow-x-scroll w-full scrollbar-hide">
          <CampaignCart name="Happy Hour" time="" />
          <CampaignCart name="Fashion Night" time="" />
          <CampaignCart name="Cyclone" time="" />
          <CampaignCart name="Black Friday" time="" />
          <CampaignCart name="Cyber Monday" time="" />
          <CampaignCart name="Amazon Prime day" time="" />
          <CampaignCart name="Hello World" time="" />
        </div>
      </div>
    </div>
  );
};

export default UpcomingCampaign;
