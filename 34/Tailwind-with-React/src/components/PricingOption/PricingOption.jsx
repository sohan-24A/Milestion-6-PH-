import React, { use } from 'react';
import PricingCard from './PricingCard';
import Daisycard from '../component/Daisycard';

const PricingOption = ({pricingPromise}) => {
    const pricingData = use(pricingPromise)
    // console.log(pricingData);
    return (
        <div>
            <h2 className='text-5xl'>Get our Membership </h2>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-5'>
                {
                    pricingData.map(pricing => <PricingCard
                    key={pricing.id}
                     pricing={pricing}></PricingCard>)
                }
                {/* {
                    pricingData.map(pricing =><Daisycard pricing={pricing}></Daisycard>)
                } */}
            </div>
        </div>
    );
};

export default PricingOption;