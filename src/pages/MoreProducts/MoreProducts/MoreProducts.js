import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MoreProduct from '../MoreProduct/MoreProduct';
import useAuth from '../../../hooks/useAuth';
import { CircularProgress } from '@mui/material';

const MoreProducts = () => {
    const [moreProducts, setMoreProducts] = useState([]);
    useEffect(() => {
        fetch('https://fathomless-river-26686.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setMoreProducts(data));
    }, [])

    const { isLoading } = useAuth();
    if (isLoading) {
        return <CircularProgress />
    }
    return (
        <Box sx={{ flexGrow: 1, textAlign: 'left', px: 5, mb: 20 }} style={{ backgroundColor: '#f4f3f4' }}>
            <Grid container spacing={2}>
                {
                    moreProducts.map(moreProduct =>
                        <Grid item sx={{ display: 'flex' }} xs={6} md={4}>
                            <MoreProduct
                                key={moreProduct._id}
                                moreProduct={moreProduct}></MoreProduct>
                        </Grid>)
                }

            </Grid>
        </Box>
    );
};

export default MoreProducts;