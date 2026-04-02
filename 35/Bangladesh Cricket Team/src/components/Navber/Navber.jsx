import React from 'react';
import dollerimg from "../../assets/Currency.png"
import navimg from "../../assets/logo.png"

const Navber = ({coin}) => {
  return (
    <div className='container mx-auto my-4'>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <img src={navimg} alt="" />
        </div>
        <div className="flex-none">
          <p className="flex justify-between items-center gap-2 font-bold text-xl">
            {coin} Coins <img src={dollerimg} alt="" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navber;