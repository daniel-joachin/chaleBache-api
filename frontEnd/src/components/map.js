import React, { useContext, useEffect, useState } from 'react'
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import { BacheContext } from '../components/bacheContext'
import axios from 'axios';

const style = {
  width: '75vw',
  height: '75vh',
}

function GoogleMapsContainer (props) {
  const { setBache } = useContext(BacheContext)

const  [potholes, setpotholes] = useState([])

  const changeBache = (obj) => {
    setBache(obj)
  }



  // useEffect(()=>{

  //   potholes = await axios.get('/api/pothole')
  // })

  return (
    <Map
      item
      xs = { 12 }
      style = { style }
      google = { props.google }
      zoom = { 14 }
      initialCenter = {{ lat: 20.733, lng: -103.452 }}
    >
      <Marker
        onClick = {(props)=>{changeBache({ title: props.title, name: props.name, 
          fIncident: props.fIncident, lIncident: props.lIncident, numIncidents: props.numIncidents })}}
        title = { 'Bache 1' }
        position = {{ lat: 20.733, lng: -103.452 }}
        //name = { 'Lord Bache' }
        fIncident = '06/05/2021'
        lIncident = '06/05/2021'
        numIncidents = {1}
      />

      {/* referencia */}
      <Marker
        onClick = {(props)=>{changeBache({ title: props.title, name: props.name })}}
        title = { 'Bache 2' }
        position = {{ lat: 20.744, lng: -103.452 }}
        //name = { 'Señor Bache' }
      />
      
    </Map>
  );
}

export default GoogleApiWrapper({ api: 'AIzaSyCK7OlpjunyTdWaF1NJ4RblpysJAWm1KBo'})(GoogleMapsContainer)
