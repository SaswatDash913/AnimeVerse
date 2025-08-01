import { useState, useEffect } from "react";
import axios from "axios";

const useAnimedata = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/display`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log("Fetch error:", error);
      });
  }, []);

  return Data;
};

export default useAnimedata;
