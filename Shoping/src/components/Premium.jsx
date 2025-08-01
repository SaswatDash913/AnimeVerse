import React, { useCallback, useEffect } from 'react';
import'./Premium.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPayment } from '../features/TotSlice';
const Premium = () =>{
    const prem = {
        p1:79.00,
        p2:199.00,
        p3:699.00
    }
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const Handleinput1 = (val)=> {
        console.log(val)
        dispatch(addPayment(val))
        navigate('/payment')
    }
    return(
        <>
        <div className='page'>
            <div className='heading'>
                <h1 className='head'>Pick Your Premium</h1>
            </div>
            <div className='maindiv'>
                <div className='div1'>
                    <h2 className='p11'>FAN</h2>
                    <h2 className='p2'>RS 79.00/MONTH</h2>
                    <p className='tax1'> VAT INCLUSIVE </p>
                    <button className='div1b1'onClick={()=>Handleinput1(prem.p1)}>Start Your Free Trial Now</button>
                    <button className='div1b2'>Skip Trial</button>
                    <p className='text1'>Stream the entire Animeverse library ad-free and watch new episodes shortly After Japan</p>
                    <li className="list1">Stream on 1 device at a time</li>
                </div>
                <div className='div2'>
                    <h2 className='p1'>MEGA-FAN</h2>
                    <h2 className='p2'>RS 199.00/MONTH</h2>
                    <p className='tax1'> VAT INCLUSIVE </p>
                    <button className='div1b1'onClick={()=>Handleinput1(prem.p2)}>Start Your Free Trial Now</button>
                    <button className='div1b2'>Skip Trial</button>
                    <p className='text1'>Stream the entire Animeverse library ad-free and watch new episodes shortly after Japan*</p>
                    <li className="list21">Stream on 4 device at a time</li>
                    <li className='list22'>Offline Viewing</li>
                    <li className='list23'>Access Crunchyroll Game Vault, a catalog of free games</li>
                </div>
                <div className='div32'>
                    <h2 className='p1'>SUPER-FAN</h2>
                    <h2 className='p2'>RS 699.00/MONTH</h2>
                    <p className='tax1'> VAT INCLUSIVE </p>
                    <button className='div1b1'onClick={()=>Handleinput1(prem.p3)}>Start Your Free Trial Now</button>
                    <button className='div1b2'>Skip Trial</button>
                    <p className='text1'>Stream the entire Animeverse library ad-free and watch new episodes shortly after Japan*</p>
                    <li className="list21">Stream on 4 device at a time</li>
                    <li className='list22'>Offline Viewing</li>
                    <li className='list23'>Access Crunchyroll Game Vault, a catalog of free games</li>
                    <li className='list24'>16% discount on Monthly Plan </li>
                </div>
            </div>
            <div className='descr'>
                <p className='des'>Free trial offer valid for new and eligible subscribers. Plan automatically renews after trial period at the price selected in the plan comparison. You may cancel at any time. Restrictions and other terms apply, including changes to prices, discounts, content and features.</p>
            </div>
        </div>
        </>
    )
}

export default Premium