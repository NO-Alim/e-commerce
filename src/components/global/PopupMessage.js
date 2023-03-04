import React, { useEffect, useState } from 'react';
import done from '../../assets/done.png';

const PopupMessage = () => {
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (active) {
      setTimeout(() => {
        setActive(false);
      }, 1000);
    }
  }, [active]);

  return (
    <div
      className={`fixed w-48 h-10 bg-white shadow-md rounded-md ring-1 ring-slate-900/5 flex gap-2 items-center justify-center z-20 top-[10vh] all overflow-hidden ${
        active ? 'right-[8vw] opacity-100' : '-right-52 opacity-0'
      }`}
    >
      <img src={done} alt="done" className="w-6" />
      <h4 className=" font-semibold">Added Successful</h4>
    </div>
  );
};

export default PopupMessage;
