import React from "react";
import Header1 from "./Header1";
import './Homepage.css'
import Premium from './Premium'
import Description from "./Description";
import Footer from "./Footer";
function Homepage()
{
    return (
        <div className="homepage-total-page">
        <Header1 />
        <div className="maindivp">
        </div>
        <div className="writing">
            <h1 className="h11"> Upgrade Your Anime Experience with premium</h1>
            <button className="btn1">Free For 7 Days</button>
            <p className="text">After your free Crunchyroll Premium: Mega Fan trial, your account will automatically renew at ₹99.00 per month. You may cancel at any time.</p>
        </div>
        <Description />
        <Premium />
        <div className='Homepage-image-add'>
            <div className='Homepage-image-add-inner'>
            </div>
        </div>
        <Footer />
        </div>
    )
}

export default Homepage