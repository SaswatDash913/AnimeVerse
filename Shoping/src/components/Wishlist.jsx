import React from 'react';
import { useSelector } from 'react-redux';
import useAnimedata from '../customhooks/useAnimedata';
import './Wishlist.css'
import Exphead from "./Exphead";
import { useDispatch } from 'react-redux';
import { removeWishlist } from '../features/TotSlice';

function Wishlist() {
    const wishdata = useAnimedata();
    const SelectedWish = useSelector((state) => state.cart.Wish);
    const dispatch = useDispatch();
    

    const HandleRemove = (id) => {
        dispatch(removeWishlist(id))
    }

    return (
       <div className='wishlist-total-page'>
        <Exphead />
            <div className="Wishlist-page">
                {SelectedWish.map((items)=>(
                    <div className='inner-wish-list'>
                        <img src={items.image} className='wish-image' />
                        <h1 className='wishhai'>{items.title}</h1>
                        <button className='remove'onClick={()=>HandleRemove(items.id)}>Remove</button>
                    </div>
                ))}
            </div>
       </div>
    );
}

export default Wishlist;
