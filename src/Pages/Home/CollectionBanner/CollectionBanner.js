import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useHistory } from 'react-router';
import banner from '../../../images/collectionBanner.jpg';

const CollectionBanner = () => {

    const history = useHistory();
    const handaleHistory = () => {
        history.push('/collection')
    }

    return (
        <Box sx={{ mt: 12, mb: 13 }}>
            <Grid container spacing={0} >
                <Grid item xs={12} md={6}>
                    <img width="100%" alt="" src={banner} />
                </Grid>

                <Grid item xs={12} md={6} sx={{ backgroundColor: "red", p: 10 }}>
                    <Typography variant="h3" sx={{ fontWeight: "bold", mb: 3 }}>
                        Buy a WORLD CLASS car on CAR COLLECTION
                    </Typography>
                    <Typography sx={{ fontWeight: "bold" }} variant="h4">
                        Get gift box on first order !!!
                    </Typography>
                    <Button onClick={handaleHistory} sx={{ backgroundColor: "black", mt: 4 }} variant="contained">See More</Button>
                </Grid>

            </Grid>
        </Box>
    );
};

export default CollectionBanner;