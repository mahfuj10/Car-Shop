import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Navigation from '../../../Pages/Home/Navigation/Navigation';
import Footer from '../../Home/Footer/Footer';
import AllCollection from '../AllCars/AllCollection';

const Collection = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch(`https://evening-fjord-73042.herokuapp.com/cars`)
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    return (
        <>
            <Navigation />
            <Container >
                <Row style={{ marginTop: "50px" }}>
                    {
                        cars.map(car => <AllCollection
                            key={car?._id}
                            car={car}
                        />)
                    }
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default Collection;