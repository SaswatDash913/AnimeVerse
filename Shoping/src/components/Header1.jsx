import React from "react";
import './Header.css'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Header1(){
    const Nav = useNavigate()
    const allowExplore =  useSelector((state)=>state.cart.PassToken)

    const HandlePress = () =>
    {
        Nav("/signup")
    }
    const Handleexp = () =>
    {
      console.log(allowExplore)
      if(allowExplore == false)
      {
        alert("please sign up")
        Nav("/signup")
      }
      else
      {
        Nav("/explore")
      }
    }

    return(
        <>
        <div className="maind">
            <div className="Name">
                <h2 className="webname">AnimeVerse</h2>
            </div>
                <button className="btttn" onClick={HandlePress}>Signup</button>
            <div className="exph">
                <button className="btttn2"onClick={Handleexp}>EXPLORE</button>
            </div>
        </div>
        </>
    )
}

export default Header1