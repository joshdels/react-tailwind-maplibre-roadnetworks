import { useRef, useEffect } from 'react';
import { Map } from './components/Map.jsx';
import { SideBar } from './components/SideBar.jsx';
import { NavBar } from './components/NavBar.jsx';
import './App.css';

export default function App() {
  return (
    <div className='app-container'>
      <SideBar />
      <NavBar />
      <Map />
    </div>
  );
}

