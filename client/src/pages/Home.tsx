import AlertNeutral from "../Components/AlertNeutral"
import Hero from '../Components/Hero'
import NewsLetterBox from '../Components/NewsLetterBox'
import TopNavMenu from '../Components/TopNavMenu'
function Home() {
  return (
    <div className='h-screen'>
      <AlertNeutral />
      <TopNavMenu />
      <Hero />
      <NewsLetterBox />
    </div>
  )
}

export default Home