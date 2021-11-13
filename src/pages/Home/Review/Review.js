import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



const Review = (props) => {
    const { name, description, img } = props.review;

    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0, height: '100%' }} style={{ boxShadow: '10px 10px 15px #99aa8b' }}>
                <CardMedia
                    component="img"
                    style={{ width: '80%', height: '200px', borderRadius: '5%', paddingTop: 10, margin: '0 auto' }}
                    image={img}
                    alt="green iguana"

                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        <span style={{ color: '#63d3d3', marginLeft: 15, fontWeight: 400 }}>
                            <u> <i>{name}</i> </u>
                        </span>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Review;