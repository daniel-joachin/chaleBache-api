import React, { useContext } from 'react'
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import { BacheContext } from '../components/bacheContext'

const style = {
  width: '75vw',
  height: '75vh',
}

function GoogleMapsContainer (props) {
  const { setBache } = useContext(BacheContext)

  const changeBache = (obj) => {
    setBache(obj)
  }

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
        onClick = {(props)=>{changeBache({ title: props.title, name: props.name })}}
        title = { 'Bache 1' }
        position = {{ lat: 20.733, lng: -103.452 }}
        name = { 'Lord Bache' }
      />
      <Marker
        onClick = {(props)=>{changeBache({ title: props.title, name: props.name })}}
        title = { 'Bache 2' }
        position = {{ lat: 20.744, lng: -103.452 }}
        name = { 'Señor Bache' }
      />
    </Map>
  );
}

export default GoogleApiWrapper({ api: 'AIzaSyCK7OlpjunyTdWaF1NJ4RblpysJAWm1KBo'})(GoogleMapsContainer)
