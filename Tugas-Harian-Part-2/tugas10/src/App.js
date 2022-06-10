import logo from './logo.svg';
import React from "react"
import "./App.css";
import Logo from "./assets/img/logo.png";

const ListCard =(props) => {
  return (
    <>
      <div className='list-card'>
        <input type={'checkbox'}/> {props.text}
      </div>
    </>
  )
}

const App = () => {
  return (
    <>
      <div className='card'>
        <img src={`${Logo}`}/>
        <h1>THINGS TO DO</h1>
        <small>During Bootcamp in SanberCode</small>
        <hr/>
        <ListCard text="Belajar GIT & CLI"/>
        <ListCard text="Belajar HTML & CSS"/>
        <ListCard text="Belajar JavaScript"/>
        <ListCard text="Belajar ReactJS Dasar"/>
        <ListCard text="Belajar ReactJS Advanced"/>
        <button className='btn first'>SEND</button>
      </div>
    </>
  )
}

export default App;
