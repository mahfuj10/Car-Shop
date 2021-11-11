import { Paper, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/UseAuth';

const MyOrder = () => {

    const [orders, setOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://evening-fjord-73042.herokuapp.com/book/${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders])

    const handaleDeleteCartItem = id => {
        const uri = `https://evening-fjord-73042.herokuapp.com/bookCar/${id}`;
        const exist = window.confirm("Are You sure want to delete ??");
        if (exist) {
            fetch(uri, {
                method: "DELETE",
            })
                .then()
                .then(data => {
                    if (data.deleteCount > 0) {
                        const remainingCar = orders.filter(order => order._id !== id);
                        setOrders(remainingCar);
                    }
                })
        }
    }


    return (
        <Box>
            {
                orders.map(order => <Paper elevation={2} sx={{ width: "450px", mb: 3 }}>

                    <img width="450" src={order?.image} alt="" />
                    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                        <Typography variant="h5" sx={{ ml: 2 }}>
                            {order?.name}
                        </Typography>
                        <Typography variant="h5" sx={{ mr: 2 }}>
                            ${order?.price}
                        </Typography>
                    </Box>
                    <Box>
                        <Button variant="text" sx={{ mt: 3, ml: 2 }}>Status: {order?.status}</Button>
                        <Button variant="contained" sx={{ mt: 3, ml: 32, backgroundColor: "red" }} onClick={() => handaleDeleteCartItem(order?._id)}>Delete</Button>
                        <Button variant="text" sx={{ mt: 3, mb: 2, ml: 2 }}>Address: {order?.address}</Button>
                    </Box>
                </Paper>)
            }

        </Box >
    );
};

export default MyOrder;