import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, description, quantity, img, price } = product;
    return (
        <Card sx={{ width: '100%', height: '100%' }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[1000] }} aria-label="recipe">
                        <i className="far fa-heart"></i>
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={name}
                subheader={quantity}
            />
            <CardMedia
                component="img"
                image={img}
                sx={{ width: '90%', height: '65%', mx: 'auto' }}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Price:{price}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton style={{ color: '#f27c7c' }} aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton style={{ color: '#7787b1' }} aria-label="share">
                    <ShareIcon />
                </IconButton>
                <Button style={{ backgroundColor: '#80002B', marginLeft: '50%' }} size="small" variant="contained"><Link to={`/product/${_id}`} style={{ textDecoration: 'none', color: 'white' }}>Purchase Now</Link></Button>
            </CardActions>

        </Card>
    );
};

export default Product;