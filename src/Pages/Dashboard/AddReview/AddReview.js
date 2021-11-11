import { ArrowLeft } from "@mui/icons-material";
import { Paper } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/UseAuth";

function Review() {

    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        fetch(`https://evening-fjord-73042.herokuapp.com/reviews`, {
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

                <input defaultValue={user.displayName} style={{ width: "300px" }} {...register("Name")} />


                <input defaultValue={user?.email} style={{ width: "300px", marginLeft: "50px" }} {...register("email")} /> <br /><br />
                <textarea cols="78" rows="3"  {...register("Message", { required: true })} /> <br />


                <select placeholder="Your Message" style={{ padding: "5px 20px", marginTop: '20px' }} {...register("rating")}>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                </select> <input type="submit" className=" btn btn-primary px-5 ms-3" value="Submit" />

            </Paper>
        </form>
    );
}

export default Review;