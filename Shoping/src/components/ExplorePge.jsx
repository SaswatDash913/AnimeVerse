import React from 'react';
import useAnimedata from '../customhooks/useAnimedata';
import './ExplorePge.css'
import Exphead from './Exphead';
import TopCard from './TopCard';
import ActionCard from './ActionCard';
import TopPicks from './TopPicks';
import Footer2 from './Footer2';

function ExplorePge(){

    const movies = useAnimedata()

    return(
        <div className='exppage-total-page'>
        <Exphead />
        <div className='carausel'>
            <div className='carausel-inner'>
                    {movies.map((item) => (
                        <div className='carausel-item' key={item.id}>
                            <h1 className='heading-item'>{item.title}</h1>
                            <iframe src={item.video} className='image-slider'/>
                            <p className='item-descript'>{item.description}</p>
                         </div>
                    ))}
            </div>
        </div>
        <TopCard />
        <div className='heavy'>
            <div className='heavy1'>
            </div>
        </div>
        <ActionCard />
        <Footer2 />
        <TopPicks />
        <div className='heavytop'>
            <div className='heavy1top'>
            </div>
        </div>
        </div>
    )
}

export default ExplorePge