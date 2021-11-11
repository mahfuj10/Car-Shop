import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const AllCollection = ({car}) => {

    const {transmition,description,image,odo,type,color,name,price,_id} = car;
    const history = useHistory();
    const handaleSeeDetails = () => {
        history.push(`/car/${_id}`)
    }

    return (
        <Col lg={4}  md={6} xm={12}>
        <Card onClick={handaleSeeDetails} style={{ width: '26rem',marginBottom:"30px" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
           {description.slice(0,110)}...
          </Card.Text>
          <Card.Text style={{display:'grid',gridTemplateColumns:`repeat(3,1fr)`}}>
          <p className="text-danger"><i className="fas fa-road"></i> {odo} km</p>
          <p className="text-danger"><i class="fas fa-transgender-alt"></i> {transmition} km</p>
          <p className="text-danger"><i class="fas fa-transgender-alt"></i> {transmition} km</p>
          <p className="text-danger"><i className="fas fa-calendar-alt"></i> 2021</p>
          <p className="text-danger"><i class="fas fa-car"></i> {type}</p>
          <p className="text-danger"><i class="fas fa-fill-drip"></i> {color}</p>
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
    );
};

export default AllCollection;