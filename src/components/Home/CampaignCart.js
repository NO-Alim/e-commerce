import React from 'react';
import Countdown from 'react-countdown';

const CampaignCart = ({ name, sec }) => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    // Render a countdown
    return (
      <>
        <div className=" bg-slate-900 text-white rounded-md px-2 py-1">
          {days ? days : 0}d
        </div>
        <span>:</span>
        <div className=" bg-slate-900 text-white rounded-md px-2 py-1">
          {hours ? hours : 0}h
        </div>
        <span>:</span>
        <div className=" bg-slate-900 text-white rounded-md px-2 py-1">
          {minutes ? minutes : 0}m
        </div>
        <span>:</span>
        <div className=" bg-slate-900 text-white rounded-md px-2 py-1">
          {seconds ? seconds : 0}s
        </div>
      </>
    );
  };
  return (
    <div className="p-3 rounded-md bg-white">
      <h1 className="text-3xl text-center customFont font-bold">{name}</h1>
      <hr className="my-3" />
      <h4 className="mb-3 text-xl">Campaign Starts in</h4>
      <div className="flex gap-1">
        <Countdown renderer={renderer} date={Date.now() + sec} />
      </div>
    </div>
  );
};

export default CampaignCart;
