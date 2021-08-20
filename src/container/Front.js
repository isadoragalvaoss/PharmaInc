import { useState, useEffect } from "react";

function Front() {
  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=50").then((response) => {
      setItem(response.data.results);
      setLoading(false);
    });
  }, []);

  return <></>;
}

export default Front;
