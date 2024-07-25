
import FAQ from './FAQ'
import Footer from './Footer'
import Header from './Header'
import SVG_Footer from './SVG_Footer'
import SVG_Tax from './SVG_Tax'
import Tax from './Tax'
import { useState } from 'react'

function Home() {
  const [countryCurrency , setCountryCurrency] = useState("$");
  return (
    <>
      <Header />
      <Tax countryCurrency={countryCurrency} setCountryCurrency={setCountryCurrency}/>
      <FAQ />
      <SVG_Footer />
      <Footer />
    </>
  )
}

export default Home