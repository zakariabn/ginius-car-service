import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useHref, useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ serviceData }) => {
  const { id, name, img, price, description } = serviceData;
  const navigate = useNavigate();

  function navigateToServiceDetails (id) {
    navigate(`/service/${id}`);
  }

  return (
    <>
      <Card className='w-100'>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Price: {price}</Card.Text>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" onClick={() => navigateToServiceDetails(id)}>Book for {name.toLowerCase()}</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Service;
