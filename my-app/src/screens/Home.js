import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import Card from '../components/Card'


export default function home() {
  return (
    <div>
    <div><Navbar/></div>
    <div><Carousel/></div>
    {/* <div>home</div> */}
    <div><Card/></div>
    <div><Footer/></div>
    </div>
  )
}
