import React from 'react';
import { useSelector } from 'react-redux';
import useEach from '../customhooks/useEach';
import './Propage.css'
import { useDispatch } from 'react-redux';
import { addWishlist } from '../features/TotSlice';
import useAction from '../customhooks/useAction';
function Propage (){
    const indivisiual = useAction()
    let SelectedId = useSelector((state)=>state.cart.Filmpage);
    const selectedItem = indivisiual.find((item) => item.id === SelectedId);
    let dispatch = useDispatch()
    const HandleWish=(selectedItem)=>{
        dispatch(addWishlist(selectedItem)) 
    }
    return(
      <div className='Product-anime-totalpage'>
        <div className='item-page-container'>
                <div className='item-inner-card'>
                {selectedItem ? (
                    <>
                        <iframe src={selectedItem.video} alt={selectedItem.name} className='know-image' />
                        <p className='know'>{selectedItem.description}</p>
                        <button className='wish'onClick={()=>{HandleWish(selectedItem)}}>Ad to WISHLIST</button>
                    </>
                ) : (
                    <p>Item not found or not selected.</p>
                )}
                </div>
        </div>
      </div>
    )
}
export default Propage