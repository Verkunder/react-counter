import { useEffect } from "react";

import instance from "../axios/instance";

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      const request = await instance();
      console.log(request);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);
};
export default CustomInstance;
