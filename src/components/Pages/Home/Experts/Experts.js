import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import expert1 from "../../../../images/experts/expert-1.jpg";
import expert2 from "../../../../images/experts/expert-2.jpg";
import expert3 from "../../../../images/experts/expert-3.jpg";
import expert4 from "../../../../images/experts/expert-4.jpg";
import expert5 from "../../../../images/experts/expert-5.jpg";
import expert6 from "../../../../images/experts/expert-6.png";
import Expert from "./Expert/Expert";

const experts = [
  { id: 1, name: "demo-name", img: expert1 },
  { id: 2, name: "demo-name", img: expert2 },
  { id: 3, name: "demo-name", img: expert3 },
  { id: 4, name: "demo-name", img: expert4 },
  { id: 5, name: "demo-name", img: expert5 },
  { id: 6, name: "demo-name", img: expert6 },
];

const Experts = () => {
  return (
    <div className="my-5 container" id='expert'>
      <h2 className="text-center">Expert</h2>
      
      <Container>
        <Row md={2} lg={3} gap={2} className='gx-5'>
          {experts.map((expert) => {
            return <Expert key={expert.id} expert={expert}></Expert>;
          })}
        </Row>
      </Container>
      
    </div>
  );
};

export default Experts;
