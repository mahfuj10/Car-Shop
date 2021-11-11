import { Box } from '@mui/system';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Car = ({ car }) => {

  const { transmition, description, image, odo, type, color, name, price, _id } = car;

  const history = useHistory();
  const handaleSeeDetails = () => {
    history.push(`/car/${_id}`)
  }

  return (

    <Col lg={4} xs={12} sm={12} md={4} className="mb-4">

      <div style={{ width: '416px', backgroundImage: `url(${image})`, backgroundSize: "cover", height: "589px" }} onClick={handaleSeeDetails}>
        <Card.Body style={{ paddingTop: "440px" }}>
          <Card.Title className="text-light">{name}</Card.Title>
          <Card.Text className="text-light">
            ${price}
          </Card.Text>
          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }} >
            <p className="text-danger"><i className="fas fa-road"></i> {odo} km</p>
            <p className="text-danger"><i class="fas fa-transgender-alt"></i> {transmition} </p>
            <p className="text-danger"><i class="fas fa-transgender-alt"></i> {transmition} km</p>
            <p className="text-danger"><i className="fas fa-calendar-alt"></i> 2021</p>
            <p className="text-danger"><i class="fas fa-car"></i> {type}</p>
            <p className="text-danger"><i class="fas fa-fill-drip"></i> {color}</p>


          </Box>

        </Card.Body>





      </div>


    </Col>
  );
};

export default Car;