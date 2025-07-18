
import './App.css'
import BenefitsSection from './components/BenefitsSection'
import ConoceCmrYDuricof from './components/ConoceCmrYDuricof'

import HeroSection from './components/HeroSection'
import PreciosTalleres from './components/PreciosTaller'
import ProgramSection from './components/ProgramSection'
import QueEncontraras from './components/QueEncontraras'
import TestimonialsSection from './components/TestimonialsSection'
import Footer from './Footer'
import Header from './Header'

const App = () => {


  return (
    <>
     {/* <Header/> */}
     <HeroSection/>
     <BenefitsSection />
     <ProgramSection />
     <ConoceCmrYDuricof />
     <PreciosTalleres />
     <QueEncontraras />
     <TestimonialsSection />
     
     
     {/* <QueEncontraras/>
     <Enterate/>     
     <ConoceCmrbolsa/>
     <ConoceDuricof/>
     <Separador/>
     <PreciosTalleres/> */}
     <Footer/>
    </>
  )
}

export default App
