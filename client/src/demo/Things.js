// import { Header } from 'semantic-ui-react';    // I haven't installed or imported semantic ui
///// HERE WE WILL ALSO TEST IF THIS IS FUNCTIONAL AND CAN CONNECT TO THE BACK END

// export default () => <h1>About</h1>

import { useState, useEffect } from "react";
import Axios from "axios";

export default () => {

  const [things, setThings] = useState([]);

  useEffect(() => {
    getThings();
  }, []);

  const getThings = async () => {
    let res = await Axios.get("api/things");
    setThings(res.data);
  };

  return (
    <>
      <h1>Things</h1>
      {things.map((t) => (
      <div key={t.id}>{t.name}</div>
      ))}
    </>
  );
};