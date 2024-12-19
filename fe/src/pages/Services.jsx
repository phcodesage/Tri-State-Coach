import PageHeader from '../components/PageHeader'
import TopNavMenu from '../components/Navbar'

export default function Services() {
  return (
    <>
      <TopNavMenu />
      <PageHeader 
        title="Our Services" 
        subtitle="Discover our range of transportation solutions"
      />
      {/* Rest of the page content */}
    </>
  )
}