import React from 'react';
import Banner from '../Banner/Banner';
import NailArt from '../NailArt/NailArt';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import useAuth from '../../../hooks/useAuth'
import { CircularProgress } from '@mui/material';

const Home = () => {
    const { isLoading } = useAuth();
    if (isLoading) {
        return <CircularProgress />
    }
    return (
        <div>

            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <NailArt></NailArt>
        </div>
    );
};

export default Home;