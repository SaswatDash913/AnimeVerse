import { useState, useEffect } from "react";
import axios from "axios";

const useEach = () => {
  const [data1, setAddata] = useState([]);
  const baseURL = import.meta.env.DEV ? '' : import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios.get(`${baseURL}/api/propage`)
      .then((response) => {
        setAddata(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return data1;
};

export default useEach;
