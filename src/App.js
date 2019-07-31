import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Info from "./components/Info.js";
import Photo from "./components/NASAPhoto.js";



function App() {
  
  const [photo, setPhoto] = useState();
  // const []

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then((response) => {
          setPhoto(response.data.hdurl);
        })
        .catch((err) => {
          console.log(err);
        });
  }, []);
  
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Photo photo={photo} />
      <Info />
    </div>
  );
}

export default App;
