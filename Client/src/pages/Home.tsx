
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import News from '../components/News'
import NewsLetter from '../components/NewsLetter'

function Home() {
  return (
    <div className='bg-amber-50'>
    
      <Hero />
      <News />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default Home