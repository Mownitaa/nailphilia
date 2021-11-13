import React from 'react';
import Navigation from '../Navigation/Navigation';
import headerBg from './headerBg.png'
{/* <Route path='/' component={Header} />




render() {
    const {match: {url}} = this.props;
  
    if(url.startWith('/dashboard') {
      return null;
    } else {
      // your existing render login
    }
  } */}

const Header = () => {

    return (
        <div style={{ backgroundImage: `url(${headerBg})` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 0, marginLeft: 5, fontWeight: 600, textShadow: '5px 5px 7px white', color: 'black' }}>
                <div>
                    <span style={{ margin: 15 }}> SALON FINDER</span> |<span style={{ margin: 15 }}> STORE FINDER</span> |
                </div>
                <div>
                    <i style={{ margin: 10 }} className="far fa-heart"></i>
                    <i style={{ margin: 10 }} className="fas fa-user"></i> |
                    <i style={{ margin: 10 }} className="fab fa-facebook-f"></i>
                    <i style={{ margin: 10 }} className="fab fa-twitter"></i>
                    <i style={{ margin: 10 }} className="fab fa-pinterest-p"></i>
                    <i style={{ margin: 10 }} className="fab fa-snapchat-ghost"></i>
                </div>
            </div>
            <div>
                <p style={{ fontSize: 60, fontWeight: 600, marginBottom: -20, marginTop: -20, textShadow: '5px 5px 5px black', color: 'white' }}>Nailphilia</p>
                <p style={{ fontWeight: 700 }}>Dhaka,Bangladesh</p>
            </div>
            <Navigation></Navigation>
        </div >
    );
};

export default Header;