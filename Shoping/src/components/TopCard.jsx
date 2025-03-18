import React, { useState,useCallback} from 'react';
import useAnimedata from '../customhooks/useAnimedata';
import { useDispatch } from 'react-redux';
import './Topcard.css'
import { useNavigate } from 'react-router-dom'
import { addPage } from '../features/TotSlice';
function TopCard ()
{
    const cardData = useAnimedata()
    const navigate = useNavigate()
    const dispatch = useDispatch() 


    const HandleId = (id) =>{
        dispatch(addPage(id))
        navigate('/pro')
    }

    return(
        <>
         <div className='card-container'>
            <div className='card'>
                <div className='inner-card'>
                    {cardData.map((item)=>(
                        
                            <img src={item.image} className='card-slider' alt="Card" key={item.id} onDoubleClick={() => HandleId(item.id)}/>
                            
                      
                    )
                )}
                </div>
            </div>
        </div>
        </>
    )
}

export default TopCard