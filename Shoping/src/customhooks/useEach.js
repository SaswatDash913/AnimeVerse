import { useState,useEffect } from "react";

import axios from "axios";


const useEach = () =>{
    const[ data1 ,setAddata] = useState([])
    useEffect(()=>{
        axios.get("/api/propage")
        .then((response)=>{
            setAddata(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    })

    return data1
    
}
export default useEach