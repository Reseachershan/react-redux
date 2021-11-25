import React, { useState } from "react";
import Header from "./Header";
import Movie from "./Movie";
import Footer from "./Footer";
function App() {
  const [change, setChange] = useState("harry potter");
  console.log(change);
  const search = (e) => {
    setChange(e.target.value);
    };
  return (
    <>
      <Header search={search} />
      <Movie tag={change} />
      <Footer />
    </>
  );
}

export default App;
