import React from 'react';
import './Footer.css'; 

function Footer (){
    return(
        <>
        <div className='Footer-Container'>
            <div className='navigation-links'>
                <h1 className='browser-type'>Navigation</h1>
                <li className='action-browse'>Action-packed</li>
                <li className='popular-browse'>Most Popular</li>
            </div>
            <div className='contact'>
                <h1 className='Contact-mee'>Contact me on social media</h1>
                <li className='insta'>instagram</li>
                <li className='github'>
                    <a href="https://github.com/SaswatDash913">GitHub</a>
                </li>
                <li className='linkedin'>linkedin</li>
            </div>
            <div className='Animeverse'>
                <h1 className='Animeverse-policies'>Animeverse</h1>
                <li className='private'>Private Policy</li>
                <li className='About'>About Me</li>
            </div>
            <div className='Account'>
                <h1 className='Your-account'>Account</h1>
                <li className='Login'>Login</li>
                <li className='Accout'>Account</li>
            </div>
        </div>
        <div className='terms'>
            <p className='conditions'>@AnimeVerse</p>
        </div>
        </>
    )
}

export default Footer