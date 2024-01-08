import React from 'react'
import AlertNeutral from "../../Components/AlertNeutral"
import TopNav from '../../Components/TopNav'
import Hero from '../../Components/Hero'
import NewsLetterBox from '../../Components/NewsLetterBox'
import TopNavMenu from '../../Components/TopNavMenu'
function Home() {
  return (
    <div>
      <AlertNeutral />
      <TopNav />
      <TopNavMenu />
      <Hero />
      <NewsLetterBox />
    </div>
  )
}

export default Home