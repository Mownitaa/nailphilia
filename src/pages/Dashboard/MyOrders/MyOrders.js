import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useAuth from '../../../hooks/useAuth'
import { CircularProgress } from '@mui/material';
import MyOrder from '../MyOrder/MyOrder';



const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        fetch('https://fathomless-river-26686.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setMyOrders(data));
    }, [])


    const { isLoading } = useAuth();
    if (isLoading) {
        return <CircularProgress />
    }
    return (
        <Box sx={{ flexGrow: 1, mx: 5, py: 6, px: 4 }} style={{ backgroundColor: '#f1f3f4' }}>
            <Grid container spacing={2}>
                {
                    myOrders.slice(0, 3).map(myOrder =>
                        <Grid item sx={{ display: 'flex' }} xs={6} md={4}>
                            <MyOrder
                                key={myOrder._id}
                                myOrder={myOrder}></MyOrder>
                        </Grid>)
                }

            </Grid>
        </Box>
    );
};

export default MyOrders;