import React from 'react';
import './Payment.css'
import { useSelector } from 'react-redux';
function Payment()
{
    let SelectedData = useSelector((state)=>state.cart.PaymentAmount) 
    console.log(SelectedData)
    return(
        <div className='payment-total-page'>
        <div className='pay'>
            <h1 className='packname'> {SelectedData} RS/- ONLY</h1>
            <div className='UPIP'>
                <button className='Upi-button'>Pay with Upi</button>
            </div>
            <div className='Cred'>
                <h2 className='names'>Enter Credit Card Details</h2>
                <div className='cred1'>
                    <input className='cardnum'placeholder='Enter card number'type='number'></input>
                </div>
                <div className='cred2'>
                    <input className='expmon' placeholder='EXP.month' type='month'></input>
                    <input className='expye' placeholder='EXP.year' type='number'maxLength='2' minLength='1'></input>
                    <input className='cv' placeholder='CVV'type='number'maxLength='3'minLength='3'></input>
                </div>
                <div className='codes'>
                    <input className='post'placeholder='postal code'type='number'></input>
                    <input className='Tid' placeholder='tax payer Id' type='number'></input>
                </div>
            </div>
            <div className='disclam'>
                <p className='disclaim-text'>Your free trial begins immediately upon signup. To avoid being charged at the regular monthly rate of ₹99.00 VAT inclusive, you must cancel your free trial within 7 days of your free trial start date.</p>
            </div>
            <div className='button-payment'>
                <button className='payment-button'>Start Free Trial</button>
            </div>
        </div>
        </div>
    )
}
export default Payment