import { Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Button from '@restart/ui/esm/Button';
import React from 'react';
import footerImg from '../../../images/footerImg.jpg';

const Footer = () => {
    return (
        <Box sx={{ backgroundImage: `url(${footerImg})`, color: 'white', mt: 14 }}>
            <Grid container spacing={2}>
                <Grid item xs={4} sx={{ p: 20 }}>
                    <Box sx={{ p: 7 }}>
                        <Typography variant="h5">Car Collection</Typography>
                        <Typography variant="body">Location: Sylhet, Dhaka , Bangladesh</Typography>
                        <Typography variant="body">info@themevessel.com</Typography>
                        <Typography variant="body">+0432239847</Typography>
                    </Box>
                </Grid>
                <Grid item xs={4} >
                    <Typography variant="h6">USFUL LINKS</Typography>
                    <p>HOME</p>
                    <p>LOGIN</p>
                    <p>COLLECTION</p>
                    <p>DASHBOARD</p>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h6">SUBSCRIBE</Typography>
                    <input placeholder="Your Email" />
                    <Button variant="contained">Submit</Button>
                </Grid>

            </Grid>
        </Box >
    );
};

export default Footer;