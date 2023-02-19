import React from 'react';

const CampaignCart = ({ name, time }) => {
  return (
    <div className="p-3 rounded-md bg-white">
      <h1 className="text-3xl text-center customFont font-bold">{name}</h1>
      <hr className="my-3" />
      <h4 className="mb-3 text-xl">Campaign Starts in</h4>
      <div className="flex gap-1">
        <div className=" bg-slate-900 text-white rounded-md px-2 py-1">0d</div>
        <span>:</span>
        <div className=" bg-slate-900 text-white rounded-md px-2 py-1">20h</div>
        <span>:</span>
        <div className=" bg-slate-900 text-white rounded-md px-2 py-1">22m</div>
        <span>:</span>
        <div className=" bg-slate-900 text-white rounded-md px-2 py-1">3s</div>
      </div>
    </div>
  );
};

export default CampaignCart;
