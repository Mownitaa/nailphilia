import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useParams } from 'react-router';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import PlaceOrder from '../PlaceOrder/PlaceOrder';



const Purchase = () => {

    const { user } = useAuth();

    const { productId } = useParams();

    console.log(productId);

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://fathomless-river-26686.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProduct(data[1]));
        // .then(data => console.log(data[productId]));
    }, [])



    return (
        <Box sx={{ mx: 20, mb: 20 }}>
            <Box sx={{ my: 5, color: '#d77272', display: { xs: 'none', md: 'block' } }} variant="h6" component="h2">
                You are logged in as: {user.displayName}( {user.email})
            </Box>

            {/* <h2>"Product ID: {productId}"</h2> */}
            <Grid container spacing={2} sx={{ display: { md: 'flex' }, mt: 5 }}>
                <Grid style={{ paddingTop: 45, paddingLeft: 35, backgroundColor: '#ffe4e1' }} item xs={12} md={6} sx={{ textAlign: 'left' }}>


                    <img style={{ width: '60%' }} src={product.img} alt="" />
                    <h1> <span style={{ color: '#407294' }}>Product:{product.name}</span> </h1>
                    <h3> <span style={{ color: '#407294' }}>Price:{product.price}$</span> </h3>
                    <h4> <span style={{ color: '#91a9b4' }}>Description: {product.description}</span></h4>
                    <h4> <span style={{ color: '#91a9b4' }}>Quantity: {product.quantity}</span></h4>
                </Grid>


                {/* place order container */}
                <Grid style={{ backgroundColor: '#e6e6fa' }} item xs={12} md={6}>
                    <PlaceOrder

                    ></PlaceOrder>
                </Grid>
            </Grid>

        </Box>
    );
};

export default Purchase;