import React from 'react';
import Cars from '../Cars/Cars/Cars';
import CollectionBanner from '../CollectionBanner/CollectionBanner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Review from '../Review/Review/Review';

const Home = () => {
    return (
        <>

            <Navigation />

            <Header />
            <Cars />
            <CollectionBanner />
            <Review />
            <Footer />

        </>
    );
};

export default Home;