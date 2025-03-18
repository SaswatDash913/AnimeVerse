import React, { useCallback, useState } from 'react';
import './Exphead.css'
import { useNavigate } from 'react-router-dom'
import useAction from '../customhooks/useAction';
import { addPage } from '../features/TotSlice';
import { useDispatch } from 'react-redux';

function Exphead () {
    const [SearchState,setSearchState] = useState(false)
    const navigate = useNavigate()
    const [searchQuerry,setsearchQuerry] = useState("")
    const Animefind = useAction()
    const Dispatch = useDispatch()
    const HandleTransfer = () =>{
        navigate("/")
    }
    const HandleTransfer1 = () =>{
        navigate("/wish")
    }

    const HandleFind= () =>
    {
        const result = Animefind.find((item)=>item.title.toLowerCase() === searchQuerry.toLowerCase())
        if(result)
        {
            Dispatch(addPage(result.id))
            navigate("/pro")
        }
    }
    
    return(
        <>
        <div className='exp-header'>
            <div className='webname'>
                <h2 className='webname1' onClick={HandleTransfer}>AnimeVerse</h2>
            </div>
            <div className='webbrowse'>
                <button className='browse'>Browse</button>
            </div>
            <div className='Webnews'>
                <button className='News'>News</button>
            </div>
            <div className='Find'>
                <button className='search-web' onClick={()=>{setSearchState(!SearchState)}}>Search</button>
                {SearchState && <input className='search-bar' placeholder='Search'onChange={(e)=>setsearchQuerry(e.target.value)}></input>}
                {SearchState && <button className='search-k'onClick={HandleFind}>Find</button>}
            </div>
            <div className='watchlist'>
                <button className='watch-list' onClick={HandleTransfer1}>WatchList</button>
            </div>
        </div>      
        </>
    )
}

export default Exphead