import React, { useEffect, useState } from "react";
import Details from "./Details";

function Fetch() {
  const [display, setdisplay] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users ")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setdisplay(data);
      });
  }, []);


  return (
    <div>

    <Details display={display} />

    </div>
  );
}

export default Fetch;
