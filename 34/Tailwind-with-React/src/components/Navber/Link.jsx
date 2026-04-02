import React from 'react';

const Link = ({rout}) => {
    return (
        <li className=' hover:bg-amber-300 cursor-pointer rounded'><a href={rout.path}>{rout.name}</a></li>
    );
};

export default Link;