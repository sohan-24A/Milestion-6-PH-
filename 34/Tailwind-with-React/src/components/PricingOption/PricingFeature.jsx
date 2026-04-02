import { Check } from 'lucide-react';
import React from 'react';

const PricingFeature = ({feature}) => {
    return (
        <span className='flex items-center gap-1 mt-3'>
           <Check></Check>
        <p>{feature}</p>
        </span>
    );
};

export default PricingFeature;