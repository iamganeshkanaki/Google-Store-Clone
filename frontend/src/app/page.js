"use client"
import Navbar from "../../components/Navbar"
import Everythingbetween from "../../components/Everythingbetween"
import Footer from "../../components/Footer"

import { BrowserRouter as Router, Routes } from "react-router-dom";
import AddtoCart from "../../components/AddtoCart"

export default function Home() {

  return (

    <div>

      <link rel="icon" href="/shopping.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600;700&display=swap" rel="stylesheet"></link>
      
      <Navbar />
      <Everythingbetween />
      <Footer />
    </div>
  )
}
