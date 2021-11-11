import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Car from '../Car/Car';

const Cars = () => {

    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('https://evening-fjord-73042.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    return (

        <Container style={{ marginTop: "100px" }}>

            <h1 className="text-center">Featured Cars</h1>
            <p className="text-center  pb-5">A black, late model Plymouth, four-door sedan Florida license number ABC 333; large dent on rear passenger door; and Florida Marlins decal on rear window.</p>

            {cars.length === 0 ? <CircularProgress /> :
                <Row >
                    {
                        cars.map(car => car.condition === "true" && <Car car={car} />)
                    }
                </Row>}
        </Container>
    );
};

export default Cars;