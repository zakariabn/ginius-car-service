import React from 'react';

const getCurrentYear = () => new Date().getFullYear();

const Footer = () => {
  return (
    <div className='mt-5 sticky-bottom'>
      <p className='text-center'><small>copyright @ {getCurrentYear()}</small></p>
    </div>
  );
};

export default Footer;