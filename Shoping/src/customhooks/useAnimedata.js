import { useState,useEffect } from "react";
import axios from "axios";

const useAnimedata = () =>{
    const [Data,setData] = useState([])
    useEffect (()=>{
        axios.get('/api/display')
        .then((response)=>{
          setData(response.data)
        })
        .catch((error)=>{
          console.log(error)
        })
    })


    return Data
}
export default useAnimedata