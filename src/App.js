import React from 'react';
import './App.css'
import Navbar from './components/navbar';
import TravelCard from './components/travelCard';
import data from './components/data/data'


export default function App(){
  const tcProps = data.map(item =>{
    return <TravelCard {...item}/>
  })
  return(
    <section>
      <Navbar/>
      {tcProps}
    </section>
  )
}