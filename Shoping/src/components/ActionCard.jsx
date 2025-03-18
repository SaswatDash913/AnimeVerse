import React from 'react';
import useAction from '../customhooks/useAction';
import './ActionCard.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPage } from '../features/TotSlice';

function ActionCard (){

    const ActionAnime = useAction()
    const [currentIndex, setCurrentIndex] = useState(0);
    const change = 7
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? ActionAnime.length - change: prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => ((prevIndex + change) >= ActionAnime.length - 1 ? 0 : prevIndex + 1));
    };

    const Displaycard = [...ActionAnime].slice(currentIndex,currentIndex+change)


    const HandleRoute = (id) =>
    {
        dispatch(addPage(id))
        navigate('/pro')
    }

    return(
        <>
        <div className='mainoneb'>
            <div className='header-head'>
                    <p className='firsthead'>Most Rated Action Anime Of the year</p>
            </div>
            <div className='wrapper-hai'>
                <div className='prev-btn'>
                    <button className='prev-image-btn1'onClick={handlePrev}>P</button>
                </div>
                <div className='Action-carausal'>
                    {Displaycard.map((Anime) => (
                        <div className="inner-card-action">
                            <img src={Anime.image} alt={Anime.title} onClick={() => {HandleRoute(Anime.id)}} className="imageof" />
                        </div>
                    ))}
                </div>
                <div className='next-btn'>
                    <button className='next-image-btn' onClick={handleNext}>N</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default ActionCard