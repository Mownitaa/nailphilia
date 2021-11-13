import { Button } from '@mui/material';
import React from 'react';

const Banner = () => {
    const bannerImg = "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/nails-salon-manicure-offer-special-banner-ad-design-template-16601c4be2646023a6868bdfc8e492f2_screen.jpg?ts=1608253291";
    return (
        <div style={{ backgroundColor: '#f4e1e2', paddingBottom: 50 }} sx={{ my: 10 }}>
            <img style={{ width: '90%', height: 'auto' }} src={bannerImg} alt="" />
            <div>
                <h1>Introducing the Celebration Collection!</h1>
                <h4>'This is the season for celebration, so drench yourself in vivid holographics and confetti glitters that are Made. To. Party.

                </h4>
                <Button style={{ backgroundColor: '#80002B' }} variant="contained">Shop Now  <i style={{ paddingLeft: 7 }} className="fas fa-arrow-right"></i></Button>
            </div>
        </div >
    );
};

export default Banner;