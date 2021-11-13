import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useAuth from '../../../hooks/useAuth'
import { CircularProgress } from '@mui/material';
import MyOrder from '../MyOrder/MyOrder';
import { Button } from '@mui/material';



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



    // Delete a product 
    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');

        if (proceed) {
            const url = `https://fathomless-river-26686.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingOrders = myOrders.filter(myOrders => myOrders._id !== id);
                        setMyOrders(remainingOrders);
                    }
                });
        }

    }



    return (
        <Box sx={{ flexGrow: 1, mx: 5, py: 6, px: 4 }} style={{ backgroundColor: '#f1f3f4' }}>
            <Grid container spacing={2}>
                {
                    myOrders.slice(0, 3).map(myOrder =>
                        <Grid item sx={{ display: 'flex' }} xs={6} md={4}>

                            <Box>
                                <Box>
                                    <MyOrder
                                        key={myOrder._id}
                                        myOrder={myOrder}>
                                    </MyOrder>
                                </Box>

                                <Box>
                                    <Button Button style={{ backgroundColor: '#622436', width: '50%', marginTop: 10 }}

                                        onClick={() => handleDeleteProduct(myOrder._id)}

                                        variant="contained">DELETE</Button>
                                </Box>
                            </Box>
                        </Grid>)

                }


            </Grid>
        </Box >
    );
};

export default MyOrders;