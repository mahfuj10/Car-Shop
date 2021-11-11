import { Paper } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/UseAuth";

function AddCars() {

    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        data.condition = "true";
        fetch(`https://evening-fjord-73042.herokuapp.com/cars`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(() => {
                alert('Added sucessfully')
                reset();
            })
    };


    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <Paper elevation={3} sx={{ p: 4, width: "800px" }}>

                <input placeholder="Name" style={{ width: "300px" }} {...register("name")} />
                <input placeholder="Image Link" style={{ width: "300px", marginLeft: "50px" }} {...register("image")} />

                <input placeholder="price" type="number" style={{ width: "300px", marginTop: '20px' }} {...register("price")} />
                <input placeholder="Email" type="email" style={{ width: "300px", marginTop: '20px', marginLeft: "50px" }} {...register("email")} /> <br /><br />

                <textarea cols="78" rows="3" placeholder="Description"  {...register("description", { required: true })} /> <br /> <br />
                <input type="Submit" />




            </Paper>
        </form>
    );
}

export default AddCars;