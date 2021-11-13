import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { CircularProgress, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Review from '../Review/Review';
import useAuth from '../../../hooks/useAuth';


const Reviews = () => {

    const reviewBg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx6aKsXYxOmvL_-HmWCgPmxjfmYvilE4-bWQ&usqp=CAU";
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://fathomless-river-26686.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    const { isLoading } = useAuth();
    if (isLoading) {
        return <CircularProgress />
    }
    return (
        <Box sx={{ flexGrow: 1, backgroundImage: `url(${reviewBg})`, pt: 4, pb: 12, my: 10, mx: '10%' }}>
            <Container>
                <Typography sx={{ fontSize: 50, fontWeight: 600, m: 2, color: '#99aa8b' }} variant="h6" component="div">
                    REVIEWS
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        reviews.map(review => <Review
                            key={review.name}
                            review={review}
                        ></Review>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Reviews;