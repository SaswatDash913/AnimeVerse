import axios from "axios";
import { useEffect, useState } from "react";

const useAction = () => {
  const [ActionData, setActionData] = useState([]);
  const baseURL = import.meta.env.DEV ? '' : import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios.get(`${baseURL}/api/action`)
      .then((response) => {
        setActionData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return ActionData;
};

export default useAction;
