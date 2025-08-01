import { useState, useEffect } from "react";
import axios from "axios";

const useAction = () => {
  const [ActionData, setActionData] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/action`)
      .then((response) => {
        setActionData(response.data);
      })
      .catch((error) => {
        console.log("Fetch error:", error);
      });
  }, []);

  return ActionData;
};

export default useAction;
