import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';
const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert("Added successfully");
                    reset();
                }
            })

    };

    return (
        <div className="add-service">
            <h1>Add services</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" /> <br />
                <textarea {...register("description")} placeholder="Description" /> <br />
                <input type="number" {...register("price")} placeholder="Price" /> <br />
                <input {...register("img")} placeholder="Image-url" /> <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;

// https://react-hook-form.com/get-started
// https://github.com/md-marop-hossain/axios