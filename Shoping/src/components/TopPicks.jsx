import React, { useState } from 'react';
import useAction from '../customhooks/useAction';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPage } from '../features/TotSlice';
import './TopPick.css'

function TopPicks ()
{
    const Toppick = useAction()
    const [currentIndextop, setCurrentIndextop] = useState(0);
    const change = 7
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const HandlethePrev = () => {
        setCurrentIndextop((prev)=>(prev === 0? Toppick.length-change : prev-1))
    }

    const HandletheNext = () => {
        setCurrentIndextop((prev)=>((prev+change) >= Toppick.length -1 ? 0 : prev+1 ))
    }

    const Handledirect =  () =>{
        dispatch(addPage(id))
        navigate('/pro')
    }

    const Displaytoppick = [...Toppick].slice(currentIndextop,currentIndextop+change)


    return(
        <>
        <div className='maindiv-toppick'>
            <div className='carausal-toppicks'>
                <div className='header-top-picks'>
                    <h1 className='header'>Top Picks for you</h1>
                </div>
                <div className='prev-button-toppick'>
                    <button className='btn-top-prev' onClick={HandlethePrev}>P</button>
                </div>
                <div className="card-toppicks-cara">
                    {
                        Displaytoppick.map((item)=>(
                            <div className='inner-top-picks'>
                                <img className='imgagestop' onClick={Handledirect} src={item.image}></img>
                                <h2 className='toppick-desc'>{item.title}</h2>
                            </div>
                        ))
                    }
                </div>
                <div className='next-button-toppick'>
                    <button className='btn-top-next' onClick={HandletheNext}>N</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default TopPicks