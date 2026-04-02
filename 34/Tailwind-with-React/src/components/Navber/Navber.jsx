import React, { useState } from 'react';
import Link from './link';
import { CircleX, Menu } from 'lucide-react';

const routes = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "About",
    path: "/about"
  },
  {
    id: 3,
    name: "Services",
    path: "/services"
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog"
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact"
  }
];

const Navber = () => {
  const [open, setOpen] = useState(false);
  const links = routes.map(rout => <Link key={rout.id} rout={rout}></Link>)


  return (
    <nav className='flex justify-between mx-10 mt-4'>
      <span className='flex gap-2' onClick={() => setOpen(!open)}>
        {open ? <CircleX className='md:hidden'></CircleX> : <Menu className='md:hidden'></Menu>}
        <ul className={`md:hidden absolute ${open ? 'top-12' : '-top-40'} duration-300 bg-gray-400 p-2`}>
          {links}
        </ul>
        <h3>My Navber </h3>
      </span>
      <ul className='md:flex gap-4 hidden'>
        {links}
      </ul>
      {/* <ul className='flex gap-4'>
                {
                    routes.map(rout => <li className='mr-10'><a href={rout.path}>{rout.name}</a></li>)
                }
            </ul> */}
      <ul>
        {/* <li className='mr-10'><a href="">Home</a></li>
                <li className='mr-10'><a href="">about</a></li>
                <li className='mr-10'><a href="">Search</a></li> */}
      </ul>
      <button>sing in</button>
    </nav>
  );
};

export default Navber;