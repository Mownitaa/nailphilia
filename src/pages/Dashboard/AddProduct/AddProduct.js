import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { Box } from '@mui/system';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://fathomless-river-26686.herokuapp.com/products', data)
            .then(res => {

                // console.log(res)

                if (res.data.insertedId) {
                    alert('Product Added Successfully');
                    reset();
                }
            })

    }

    const addProductBg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5vzmBzBi-Ak3JN_aAK97qyKY-beUbrBHXAw1sNOkPdO4Ojl05m4Q-6wKrOCvQ4I80Hng&usqp=CAU";



    return (
        <Box style={{ margin: 45, marginBottom: 120, backgroundImage: `url(${addProductBg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', paddingBottom: 50, paddingTop: 20 }}>
            <h2 style={{ color: '#D77272', fontSize: 50 }}>Add A Product</h2>
            <hr />
            <form style={{ padding: 5, paddingBottom: 70, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', boxShadow: '3px 12px 13px gray' }} onSubmit={handleSubmit(onSubmit)}>
                <input style={{ boxShadow: '3px 12px 13px gray', padding: 7, width: '50%', height: '50px', borderTop: 0, borderLeft: 0, borderRight: 0, marginBottom: 15 }}
                    {...register("name", { required: true, maxLength: 20 })} placeholder="Product Name" />

                <input style={{ boxShadow: '3px 12px 13px gray', padding: 7, width: '50%', height: '80px', borderTop: 0, borderLeft: 0, borderRight: 0, marginBottom: 15 }}
                    {...register("price")} placeholder="Price" />
                <input style={{ boxShadow: '3px 12px 13px gray', padding: 7, width: '50%', height: '80px', borderTop: 0, borderLeft: 0, borderRight: 0, marginBottom: 15 }}
                    {...register("quantity")} placeholder="quantity" />
                <input style={{ boxShadow: '3px 12px 13px gray', padding: 7, width: '50%', height: '80px', borderTop: 0, borderLeft: 0, borderRight: 0, marginBottom: 15 }}
                    {...register("description")} placeholder="Description" />

                <input style={{ boxShadow: '3px 12px 13px gray', padding: 7, width: '50%', height: '50px', borderTop: 0, borderLeft: 0, borderRight: 0, marginBottom: 15 }}
                    {...register("img")} placeholder="Image URL" />
                <input style={{ boxShadow: '3px 12px 13px gray', padding: 7, width: '30%', height: '50px', borderTop: 0, borderLeft: 0, borderRight: 0, marginBottom: 15, backgroundColor: '#d77272', color: 'white', fontSize: 20 }} type="submit" />
            </form>
        </Box>
    );
};

export default AddProduct;