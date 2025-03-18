import React, { useState } from 'react';
import './Footer2.css'; 
import { useSelector } from 'react-redux';
function Footer2 (){
    return(
        <>
        <div className='Footer-Container1'>
            <div className='navigation-links1'>
                <h1 className='browser-type1'>Navigation</h1>
                <li className='action-browse1'>Action-packed</li>
                <li className='popular-browse1'>Most Popular</li>
            </div>
            <div className='contact1'>
                <h1 className='Contact-mee1'>Contact me on social media</h1>
                <li className='insta1'>instagram</li>
                <li className='github1'>github</li>
                <li className='linkedin1'>linkedin</li>
            </div>
            <div className='Animeverse1'>
                <h1 className='Animeverse-policies1'>Animeverse</h1>
                <li className='private1'>Private Policy</li>
                <li className='About1'>About Me</li>
            </div>
            <div className='Account1'>
                <h1 className='Your-account1'>Account</h1>
                <li className='Login1'>Login</li>
                <li className='Accout1'>Account</li>
            </div>
        </div>
        <div className='terms1'>
            <p className='conditions1'>@AnimeVerse</p>
        </div>
        </>
    )
}

export default Footer2