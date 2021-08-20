import { useState, useEffect } from "react";
import { Nav } from "../components/Nav";
import axios from "axios";

function Front() {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=50").then((response) => {
      setItem(response.data.results);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Nav />
    </>
  );
}

export default Front;
