import React from 'react'
import Home from "../../Components/Home";
import SideBar from '../../Components/SideBar';
import '../../App.css';

const HomePage = () => {
  return (
    <div className="App">
      <SideBar />
      <Home />
    </div>
  );
}

export default HomePage
