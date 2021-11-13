import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const MyOrder = ({ myOrder }) => {
    const { name, price, img } = myOrder;
    return (
        <Card sx={{ width: '100%', height: '100%' }}>
            <CardMedia
                component="img"
                image={img}
                sx={{ width: '90%', height: '65%', mx: 'auto' }}
            />
            <CardContent>
                <Typography variant="h4" color="text.secondary">
                    {name}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    Price:{price}$
                </Typography>
            </CardContent>

            <Button style={{ backgroundColor: '#622436', width: '30%' }} variant="contained">DELETE</Button>

        </Card>
    );
};

export default MyOrder;