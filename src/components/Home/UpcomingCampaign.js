import React from 'react';
import CampaignCart from './CampaignCart';

const UpcomingCampaign = () => {
  return (
    <div className="bg-slate-900/5 rounded-md p-5">
      <div className=" space-y-5">
        <h1 className="text-3xl">Upcoming Campaign</h1>
        <div className="flex gap-5 overflow-x-scroll w-full scrollbar-hide">
          <CampaignCart name="Happy Hour" sec={2254453432} />
          <CampaignCart name="Fashion Night" sec={12334444} />
          <CampaignCart name="Cyclone" sec={38485} />
          <CampaignCart name="Black Friday" sec={2994994} />
          <CampaignCart name="Cyber Monday" sec={23213} />
          <CampaignCart name="Amazon Prime day" sec={23232} />
          <CampaignCart name="Hello World" sec={232322} />
        </div>
      </div>
    </div>
  );
};

export default UpcomingCampaign;
