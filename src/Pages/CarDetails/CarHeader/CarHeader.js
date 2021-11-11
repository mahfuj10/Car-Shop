import { Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../../Hooks/UseAuth';

const CarHeader = ({ car }) => {

    const { transmition, description, image, odo, type, color, name, price, _id } = car;
    const { user } = useAuth();
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [userName, setUserName] = useState('');


    const handaleUserName = e => {
        setUserName(e.target.value);
    }
    const handaleAdressField = e => {
        setAddress(e.target.value);
    }
    const handaleNumberField = e => {
        setNumber(e.target.value);
    }

    const handaleAddToCart = () => {
        car.email = user?.email;
        car.userName = user?.displayName;
        car.address = address;
        car.number = number;
        car.status = 'pending';
        fetch(`https://evening-fjord-73042.herokuapp.com/book`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(car)
        })
            .then(res => res.json())
            .then(data => {
                alert("Added this car on your cart.")
            })
    }

    return (
        <Container>
            <Row md={12}>

                <Col md={6}>
                    <aside className="position-absolute text-light d-flex px-4 pt-5">
                        <h3>{name}</h3>
                        <h3 style={{ marginLeft: "100px" }}>${price}</h3>
                    </aside>
                    <img className="img-fluid" src={image} alt="" />

                </Col>

                <Col md={6}>
                    <article style={{ width: "385px" }} className="shadow p-3 ">
                        <h5 className="mt-3 mb-3">Booking This Car</h5>
                        <aside >
                            <span className="d-flex border-bottom justify-content-between mb-3">
                                <h6>Make</h6>
                                <h6>Ferrari</h6>
                            </span>

                            <span className="d-flex justify-content-between border-bottom mb-3">
                                <h6>Model</h6>
                                <h6>{name}</h6>
                            </span>
                            <span className="d-flex justify-content-between mb-3 border-bottom">
                                <h6>Body Style</h6>
                                <h6>Convertible</h6>
                            </span>
                            <span className="d-flex border-bottom justify-content-between mb-3">
                                <h6>Year</h6>
                                <h6>2021</h6>
                            </span>
                            <span className="d-flex border-bottom justify-content-between mb-3" >
                                <h6>Condition</h6>
                                <h6>Brand New</h6>
                            </span>
                            <span className="d-flex border-bottom justify-content-between mb-3">
                                <h6>Mileage</h6>
                                <h6>{odo} km</h6>
                            </span>
                            <span className="d-flex border-bottom justify-content-between mb-3">
                                <h6>Color </h6>
                                <h6>{color}</h6>
                            </span>
                            <span className="d-flex border-bottom justify-content-between mb-3">
                                <h6>Transmission </h6>
                                <h6>{transmition}</h6>
                            </span>
                            <span className="d-flex justify-content-between mb-3">
                                <h6>Location </h6>
                                <h6>Dhaka, Bangladesh</h6>
                            </span>
                        </aside>
                    </article>
                </Col>

            </Row>

            <Box sx={{ mt: 16, mb: 10 }} style={{ display: "flex", justifyContent: "center" }}>
                <Paper elevation="2" sx={{ padding: "50px 200px" }}>
                    <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center", mb: 5 }}>Booking Form</Typography>
                    <TextField onBlur={handaleUserName} id="outlined-basic" sx={{ width: "350px" }} label="Name" variant="outlined" defaultValue={user?.displayName} />
                    <TextField sx={{ width: "350px", marginLeft: "100px" }} disabled id="outlined-basic" label="Email" variant="outlined" defaultValue={user?.email} /> <br /><br />
                    <TextField sx={{ width: "350px" }} onBlur={handaleAdressField} id="outlined-basic" label="Your Address" variant="outlined" />
                    <TextField sx={{ width: "350px", marginLeft: "100px" }} onBlur={handaleNumberField} id="outlined-basic" label="Mobile Number" type="number" variant="outlined" />

                    <button onClick={handaleAddToCart} className="btn btn-danger w-25 mt-4">Book Now</button>

                </Paper>
            </Box>


        </Container>
    );
};

export default CarHeader;