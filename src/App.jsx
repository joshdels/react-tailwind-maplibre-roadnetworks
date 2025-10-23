import { useRef, useEffect } from 'react';
import { Map } from './components/Map.jsx';
import { SideBar } from './components/SideBar.jsx';
import { NavBar } from './components/NavBar.jsx';
import { Button } from './components/Button.jsx';

import { FaRoad } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

import './App.css';

export default function App() {
  return (
    <div className='app-container'>
      <SideBar />
      <NavBar />
      <Map />
      <Button name="Transportation" icon={FaRoad} x="280px" y="80px"/>
      <Button name="Weather" icon={FaSun} x="460px" y="80px"/>
    </div>
  );
}

