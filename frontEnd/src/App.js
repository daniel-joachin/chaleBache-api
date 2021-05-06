import logo from './logo.svg';
import './App.css';
import Test from './components/test';
import Map from './components/map';
import BacheInfo from './components/bacheInfo';
import Grid from '@material-ui/core/Grid';
import {useState} from React;
import React from 'react';
import BacheContext from './components/bacheContext';


function App() {
  return (
    <div className="App">

      <Test/>
      
      <div className="wrapper">
        <BacheProvider>
          <Map className="l"/>
          <BacheInfo name="x" location="1,2" seriedad="10" className="infos"/>
        </BacheProvider>
        
      </div>



      
      
      
    </div>
  );
}

export default App;