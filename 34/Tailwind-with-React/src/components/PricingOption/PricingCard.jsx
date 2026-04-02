import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({ pricing }) => {
    // console.log(pricing);
    const { name, price, duration, description, features } = pricing
    return (
        <div className='flex flex-col border-none bg-blue-400 rounded-2xl px-6 py-4'>
            {/* card header  */}
            <div>
                <h1 className='text-4xl'>{name}</h1>
                <h4>{`$${price} / ${duration}`}</h4>
            </div>
            {/* Card body */}
            <div className='bg-blue-500 p-3 rounded-xl flex-1'>
                <p>{description}</p>
                <ul>
                    {
                        features.map((feature,index) => <PricingFeature key={index} feature={feature}></PricingFeature>)
                    }
                </ul>
            </div>
            <button class="btn bg-blue-300 border-none w-full mt-2">Subscribe </button>
        </div>
    );
};

export default PricingCard;