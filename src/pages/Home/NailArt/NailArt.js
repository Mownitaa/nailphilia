import React from 'react';
import fingertipArt from './fingertip-art.png';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';



const NailArt = () => {
    const nailArt = "https://verilymag.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cq_auto:good%2Cw_1200/MTMwMjUzNTI5NTU3MzU0NTA2/nail-art.png";

    return (
        <Box sx={{ flexGrow: 1, textAlign: 'left', p: 3, m: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={9} style={{ textAlign: 'center', backgroundColor: '#F8F8F8' }}>
                    <h1 style={{ color: '#A71A23' }}>Nail Art Tutorials</h1>
                    <p>Transform your traditional manicure to one that is bold and expressive with inspiration from our nail art gallery.
                    </p>
                    <p> With easy-to-follow nail art tutorials, your next new nail art creation awaits. Get ideas for new nail designs and </p>
                    <p>learn how you can achieve the look with our products.

                    </p>


                    <  img style={{ width: '80%' }} src={nailArt} alt="" />

                </Grid>






                <Grid item xs={12} md={3}>
                    <img style={{ width: '100%', height: 'auto', marginBottom: 30 }} src={fingertipArt} alt="" />


                    <Link style={{ textDecoration: 'none', fontSize: 18, color: 'black' }} to="#"> Colors <i className="fas fa-chevron-down"></i> </Link>
                    <hr />
                    <br />
                    <Link style={{ textDecoration: 'none', fontSize: 18, color: 'black' }} to="#"> Collection <i className="fas fa-chevron-down"></i> </Link>

                    <hr />
                    <br />
                    <Link style={{ textDecoration: 'none', fontSize: 18, color: 'black' }} to="#"> Trend <i className="fas fa-chevron-down"></i> </Link>

                    <hr />
                    <br />
                    <Link style={{ textDecoration: 'none', fontSize: 18, color: 'black' }} to="#"> Products Line <i className="fas fa-chevron-down"></i> </Link>


                    <hr />
                </Grid>
            </Grid>
        </Box >

    );
};

export default NailArt;