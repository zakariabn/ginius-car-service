import React from 'react';
import { Link, useParams } from 'react-router-dom';


const ServiceDetails = () => {
  const {serviceId} = useParams();
  return (
    <div className='text-center'>
      <h2 className='font-weight-bold'>Service Details:{serviceId} </h2>
      <Link to='/checkout'>
        <button className='btn btn-primary mt-3'>checkout</button>
      </Link>
    </div>
  );
};

export default ServiceDetails;