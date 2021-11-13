import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from '../Home/Product/Product';
import useAuth from '../../../hooks/useAuth'
import { CircularProgress } from '@mui/material';


const Products = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fathomless-river-26686.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])


    const { isLoading } = useAuth();
    if (isLoading) {
        return <CircularProgress />
    }

    return (
        <Box sx={{ flexGrow: 1, textAlign: 'left', px: 5, pb: 2 }} style={{ backgroundColor: '#f1f3f4' }}>
            <Grid container spacing={2}>
                {
                    products.slice(0, 6).map(product =>
                        <Grid item sx={{ display: 'flex' }} xs={6} md={4}>
                            <Product
                                key={product._id}
                                product={product}></Product>
                        </Grid>)
                }

            </Grid>
        </Box>
    );
};

export default Products;