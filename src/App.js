import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Navbar from "./components/Navbar.js";
import Info from "./components/Info.js";
import Photo from "./components/NASAPhoto.js";
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  height: 700px;
`;

function App() {
  
  const [photo, setPhoto] = useState();
  const [title, setTitle] = useState();
  const [explanation, setExplanation] = useState();
  const [date, setDate] = useState();
  const [copyright, setCopyright] = useState();
  // const [nasaData, setNasaData]

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then((response) => {
          // const {title, url, explanation} = response.data
          console.log(response);
          setPhoto(response.data.url);
          setTitle(response.data.title);
          setExplanation(response.data.explanation);
          setDate(response.data.date);
          setCopyright(response.data.copyright);
        })
        .catch((err) => {
          console.log(err);
        });
  }, []);
  
  return (
    <div className="App">
      <Navbar />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Wrapper>
        <Photo photo={photo} />
        <Info title={title} date={date} explanation={explanation} copyright={copyright}  />
      </Wrapper>
      
      
    </div>
  );
}

export default App;
