import './App.css'
import Nav from './components/nav'
import Hero from './components/Hero'
import Sponsor from './components/Sponsor'
import StepsContainer from './components/StepsContainer'
import SectionTwo from './components/SectionTwo'
import Hosthub from './components/Hosthub'
import SectionThree from './components/SectionThree'
import CustomerSection from './components/CustomerSection'
import HostingSection from './components/HostingSection'
import FaqSection from './components/FaqSection'
import FreeTrial from './components/FreeTrial'
import Footer from './components/Footer'

function App() {

  return (
   < div className= 'bg-blue-500'>
   <Nav/>
   <Hero/>
   <Sponsor/>
   <StepsContainer/>
   <SectionTwo/>
   <Hosthub/>
   <SectionThree/>
   <CustomerSection/>
   <HostingSection/>
   <FaqSection/>
   <FreeTrial/>
   <Footer/>
   </div>
  )
}

export default App
