import { useRef, useEffect, useState } from 'react';
import { Map } from './containers/Map.jsx';
import { SideBar } from './containers/SideBar.jsx';
import { NavBar } from './containers/NavBar.jsx';
import { Details } from './containers/Details.jsx';
import { Information } from './containers/Information.jsx';
import { Button } from './components/Button.jsx';

import { FaRoad } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

import './App.css';

const universities = [
  {"name": "University of Ateneo", "city": "Davao", "region": "Davao Region", "noStudents": 200, "img": "/schools/ateneo.png"},
  {"name": "University of Philippines", "city": "Manila", "region": "National Capital Region", "noStudents": 900, "img": "/schools/up.png"},
  {"name": "University of Cebu", "city": "Cebu", "region": "Cebu Region", "noStudents": 500, "img": "/schools/cebu.png"},
  {"name": "University of SouthEastern Philippines", "city": "Cebu", "region": "Davao Region", "noStudents": 500, "img": "/schools/usep.png"},
]

export default function App() {
  const [university, setUniversity] = useState(universities);

  return (
    <div className='app-container'>
      <SideBar />
      <NavBar />
      <Map />
      <Details />
      <Button name="Transportation" icon={FaRoad} x="17%"/>
      <Button name="Weather" icon={FaSun} x="25%"/>
      <Information places={university}/>
    </div>
  );
}

