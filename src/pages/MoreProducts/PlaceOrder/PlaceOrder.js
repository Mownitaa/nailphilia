import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import useAuth from '../../../hooks/useAuth';
import { Button } from '@mui/material';


const PlaceOrder = ({ order }) => {

    const { user } = useAuth();

    const initialInfo = { name: user.displayName, email: user.email, address: '', phone: '' }
    const [placeOrderInfo, setPlaceOrderInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...placeOrderInfo };
        newInfo[field] = value;
        // console.log(newInfo);
        setPlaceOrderInfo(newInfo);
    }


    const handleBookingSubmit = e => {
        alert('Order Placed Successfully')
        e.preventDefault();
    }
    const { productId } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://fathomless-river-26686.herokuapp.com/products')
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => setProduct(data[1]));
    }, [productId])

    return (
        <Box style={{ marginBottom: 120, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', paddingBottom: 20 }}>
            <h2 style={{ marginTop: 0, color: '#91a9b4', fontSize: 50 }}>Place Your Order</h2>
            <hr />


            <form style={{ padding: 3, paddingBottom: 70, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}

                onSubmit={handleBookingSubmit}
            >

                <TextField
                    label="product name"
                    style={{ width: '90%', margin: 1 }}
                    inputProps={{ style: { fontSize: 40, marginTop: 10 } }}
                    id="outlined-size-small"
                    value={product.name}
                    size="small"
                    variant="filled" />
                <br />
                <TextField
                    style={{ fontSize: '30px', width: '90%', m: 1, color: 'white' }}
                    name="name"
                    id="outlined-size-small"
                    onBlur={handleOnBlur}
                    defaultValue={user.displayName}
                    size="small"
                    variant="filled" />
                <br />
                <TextField
                    style={{ fontSize: '30px', width: '90%', m: 1, color: 'white' }}
                    id="outlined-size-small"
                    name="email"
                    onBlur={handleOnBlur}
                    defaultValue={user.email}
                    size="small"
                    variant="filled" />
                <br />
                <TextField
                    style={{ fontSize: '30px', width: '90%', m: 1, color: 'white' }}
                    id="outlined-size-small"
                    name="address"
                    onBlur={handleOnBlur}
                    label="Full Address"
                    size="small"
                    variant="filled" />
                <br />
                <TextField
                    style={{ fontSize: '30px', width: '90%', m: 1, color: 'white' }}
                    id="outlined-size-small"
                    name="phone"
                    onBlur={handleOnBlur}
                    label="Phone Number"
                    size="small"
                    variant="filled" />

                <Button
                    style={{ background: '#d77272', color: 'white', marginTop: 20, width: '50%', height: '60px' }}
                    type="submit" variant="contained">Place Order</Button>
            </form>
        </Box>
    );
};

export default PlaceOrder;