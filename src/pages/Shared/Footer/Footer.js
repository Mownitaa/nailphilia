import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Footer = () => {

    return (

        <Box sx={{ flexGrow: 1, textAlign: 'left', pl: 5, pb: 2 }} style={{ backgroundColor: '#f1f3f4' }}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={3}>

                    <h3>EXPERIENCE</h3>
                    <hr />
                    <p>💅Try It On </p>
                    <p>💅 Retired Shades</p>
                    <p>💅Salon Finder</p>
                    <p>💅Where To Buy</p>
                    <p>💅 OPI Test Salon</p>


                </Grid>
                <Grid item xs={6} md={3}>
                    <h3>CONNECT</h3>
                    <hr />
                    <p>💅 About OPI</p>
                    <p>💅 Giving Back</p>
                    <p>💅 Contact Us</p>
                    <p>💅 Careers at Nailphilia</p>
                    <p>💅OPI Influencer</p>

                </Grid>
                <Grid item xs={6} md={3}>
                    <h3>COLLECTIONS</h3>
                    <hr />
                    <p>💅 Celebration</p>
                    <p>💅 Download</p>
                    <p>💅Malibu</p>
                    <p>💅Hollywood</p>
                    <p>💅 Milan</p>

                </Grid>
                <Grid item xs={6} md={3}>
                    <h3>CARE</h3>
                    <hr />
                    <p>💅 Treatments and Strengtheners</p>
                    <p>💅 Finishes</p>
                    <p>💅 Nail Polish Removers</p>
                    <p>💅 Dying Agents</p>
                    <p>💅 Corrector pen</p>


                </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ mb: 3, mt: 5 }}>
                <Grid item xs={6}>
                    <p style={{ fontSize: 35, fontWeight: 600, marginBottom: -20, marginTop: 10, textShadow: '6px 1px 5px black', color: 'white' }}>Nailphilia</p>
                    <input type="text" placeholder="Your Email" style={{ marginTop: 25, width: '60%', height: '30px' }} />
                    <button style={{ padding: 8, backgroundColor: '#5d6264', color: 'white' }}>Sign Up</button>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: 'center', fontSize: 15, mt: 2 }}>
                    <p>Cookies Settings Sitemap Terms and Conditions Security and Privacy </p>
                    <p><i className="far fa-registered"></i> Copyright 2021, Nailphilia, all trademarks registered. All rights reserved.</p>
                </Grid>
            </Grid >
        </Box >

    );
};

export default Footer;