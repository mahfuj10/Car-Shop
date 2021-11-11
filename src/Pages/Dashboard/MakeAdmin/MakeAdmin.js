import { TextField, Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');

    const onAdminEmailValue = e => {
        setEmail(e.target.value);
    }


    const handaleMakeAdmin = (e) => {
        const user = { email };

        fetch(`https://evening-fjord-73042.herokuapp.com/users/admin`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert("make Admin sucessfully")
                }
            })

        e.preventDefault();

    }

    return (
        <Box >
            <form onSubmit={handaleMakeAdmin}>


                <TextField onChange={onAdminEmailValue} id="outlined-basic" label="Enter the Email" variant="outlined" />
                <Button type='submit' variant="contained">Contained</Button>
            </form>
        </Box>
    );
};

export default MakeAdmin;