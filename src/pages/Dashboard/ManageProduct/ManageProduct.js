import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



const ManageProduct = ({ manageProduct }) => {

    const { name, price, img } = manageProduct;

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

        </Card>
    );
};

export default ManageProduct;