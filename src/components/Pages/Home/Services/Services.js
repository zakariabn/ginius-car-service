import React, { useEffect, useState } from 'react';
import Service from './Service/Service';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);
  
  useEffect(() => {
    fetch('services.json')
      .then (res => res.json())
      .then (data => setServices(data))
      .catch (error => console.warn(`Data not found \n ${error}`));
  }, [])


  return (
    <div className='my-5 container ' id='services'>
      <h2 className='font-bold text-center' >Services: {services.length}</h2>
      <div className='services-container container '>
      {
        services.map(service => {
          
          return(
            <Service
              key={service.id}
              serviceData={service}
            ></Service>
          )
        })
      }
    </div>
    </div>
  );
};

export default Services;