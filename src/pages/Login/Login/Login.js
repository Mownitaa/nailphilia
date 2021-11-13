import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
// import login from '../../../images/login.png'
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }


    const loginBg = "https://thumbs.dreamstime.com/b/female-hand-nail-beautiful-style-pink-manicure-colored-background-banner-171709682.jpg";

    return (
        <Container style={{ backgroundImage: `url(${loginBg})`, backgroundRepeat: 'no-repeat', width: '100%', height: '100%', backgroundSize: 'cover', padding: 150 }} sx={{ pr: 20, my: 6 }}>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: -8, ml: 40 }} xs={12} md={6}>
                    <Typography style={{ fontSize: 46, fontWeight: 600, color: '#9C85AF' }} variant="body1" gutterBottom>Login!!!</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" style={{ backgroundColor: '#00BDD1' }} variant="contained">Login</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Login successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>

                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;