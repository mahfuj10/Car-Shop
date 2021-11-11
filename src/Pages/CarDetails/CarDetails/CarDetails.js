import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import banner from '../../../images/detailsBanner.jpg';
import Navigation from '../../Home/Navigation/Navigation';
import CarHeader from '../CarHeader/CarHeader';

const CarDetails = () => {

    const [car, setCar] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://evening-fjord-73042.herokuapp.com/cars/${id}`)
            .then(res => res.json())
            .then(data => setCar(data))
    }, [])

    return (
        <>
            <article style={{ backgroundImage: `url(${banner})`, height: "500px" }}>

                <Navigation />
                <aside className='d-grid justify-content-center mt-5 pt-5' >
                    <h3>CAR DETAILS</h3>
                    <h6>Home / Car Detials</h6>
                </aside>

            </article>

            <CarHeader car={car} />

        </>
    );
};

export default CarDetails;