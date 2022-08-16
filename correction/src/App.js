import React from "react";
import MovieList from "./components/MovieList";
import MovieDescription from "./components/MovieDescription";
import "./App.css";
import {Routes,Route } from "react-router-dom";


function App() {
  return (
    <>
       <Routes>
          <Route path='/'  element={<MovieList/>} />
          <Route path='/movie/:id' element={<MovieDescription/>} />         
        </Routes>
    </>
  );
}

export default App;
