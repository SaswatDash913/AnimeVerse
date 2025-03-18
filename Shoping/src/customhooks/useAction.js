import axios from "axios";
import { useEffect, useState } from "react";

const useAction = () =>{
    const[ActionData,setActionData] = useState([])
    useEffect(()=>{
        axios.get("/api/action")
        .then((response)=>{
            setActionData(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])

    return ActionData
}

export default useAction