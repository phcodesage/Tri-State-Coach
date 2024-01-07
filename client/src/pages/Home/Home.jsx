import React from 'react'
import AlertNeutral from "../../Components/AlertNeutral"
import TopNav from '../../Components/TopNav'
import Hero from '../../Components/Hero'
import Footer from '../../Components/Footer'
function Home() {
  return (
    <div>
      <AlertNeutral />
      <TopNav />
      <Hero />
      <Footer />
    </div>
  )
}

export default Home