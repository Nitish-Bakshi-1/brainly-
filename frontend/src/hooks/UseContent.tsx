import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
const UseContent = () => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/content`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => setContents(response.data.content));
  }, []);

  return contents;
};

export default UseContent;
