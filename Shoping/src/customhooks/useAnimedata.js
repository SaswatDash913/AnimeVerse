import { useState, useEffect } from "react";
import axios from "axios";

const useAnimedata = () => {
  const [Data, setData] = useState([]);
  const baseURL = import.meta.env.DEV ? '' : import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios.get(`${baseURL}/api/display`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return Data;
};

export default useAnimedata;
