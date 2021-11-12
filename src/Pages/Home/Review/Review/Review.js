import { Container, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { Box } from '@mui/system';
import Rating from 'react-rating';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);



const Review = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://evening-fjord-73042.herokuapp.com/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (

        <Container sx={{ mt: 10, mb: 3 }}>
            <Typography variant="h5" sx={{ textAlign: "center", mb: 3 }}>What our client says !</Typography>
            <Box>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false
                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        reviews.map(review => <SwiperSlide>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <img width="70" src={review?.image} alt="reviewimg" />
                                <Box sx={{ ml: 2 }}>
                                    <Typography variant="h6">{review.name}</Typography>
                                    <Typography variant="body2">{review.profession}</Typography>

                                </Box>
                            </Box>
                            <Typography sx={{ mt: 2 }} variant="body2">{review?.description}</Typography>
                            <Rating initialRating={review?.rating}
                                style={{ fontSize: "13px" }}
                                emptySymbol="far fa-star icon-color" fullSymbol="fas fa-star icon-color" readonly></Rating>
                        </SwiperSlide>)
                    }

                    {/* <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide> */}

                </Swiper>
            </Box>

        </Container>
    );
};

export default Review;