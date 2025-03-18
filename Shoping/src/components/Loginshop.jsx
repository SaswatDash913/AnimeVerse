import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loginn } from '../features/TotSlice'; 
import './Loginshop.css'
import { useNavigate } from 'react-router-dom';
function Loginshop() {
  const [User, setUser] = useState('');
  const [pass, setPass] = useState('');
  const dispatch = useDispatch();

  const UserLoginData = useSelector((state) => state.cart.logined);

  const allowed = useSelector((state)=> state.cart.GoodtoGo)

  let nav = useNavigate()
  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  const handlePassChange = (e) => {
    setPass(e.target.value);
  };

  const handleup =()=>{
    nav  = ('/signup')
  }

  const handleLogin = () => {
    dispatch(Loginn({ user: User, pass:pass }));
    setPass("")
    setUser("")
  };

  return (
     <div className='the-login-total'>
        <div className='maindivv'>
          <div className='lgin'>
            <h1 className='sign1'>LogIn</h1>
          </div>
          <div className='usern'>
            <input className="inp1"type="text"placeholder="Username"onChange={handleUserChange}/>
          </div>
          <div className='passs'>
            <input className="imp1"type="password"placeholder="Password"onChange={handlePassChange}/>
          </div>
          <div className='btn2'>
            <button className="bn" onClick={handleLogin}>Submit</button>
          </div>
          <div className='Sign'>
            <button className='bn1'onClick={handleup}>NEW USER</button>
         </div>
       </div>
     </div>
  );
}
export default Loginshop;
