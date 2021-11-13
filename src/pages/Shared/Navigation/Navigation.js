import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link, NavLink } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <Box sx={{ flexGrow: 1, width: 'auto', height: 'auto' }}>
            <AppBar position="static">
                <Toolbar style={{ backgroundColor: 'white', textColor: 'black' }} >

                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/home"><Button color="inherit"> <span style={{ fontWeight: 600, fontSize: 22, marginRight: 20 }}>Home</span> </Button></Link>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/moreProducts"><Button color="inherit"> <span style={{ color: '#DB7C7D', fontWeight: 900 }}>More Products</span> </Button></Link>

                    {
                        user?.email ?
                            <Box>
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                    <Button style={{ color: '#DB7C7D', fontWeight: 900 }}>Dashboard</Button>
                                </NavLink>
                                <Button onClick={logout} style={{ color: '#DB7C7D', fontWeight: 900 }}>Logout


                                    <Box sx={{ display: { xs: 'none', md: 'block', color: '#00B3C4' }, m: 3 }}>
                                        <u>  <i>  ***{user.displayName}***</i>  </u>
                                    </Box>
                                </Button>
                            </Box>
                            :
                            <NavLink style={{ textDecoration: 'none', color: '#DB7C7D', fontWeight: 900 }} to="/login">
                                <Button style={{ color: '#00B3C4', fontWeight: 900 }} >Login</Button>
                            </NavLink>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;