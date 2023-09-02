import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './components/_base/reset.scss';

import { Header } from './components/organisms/Header/Header'
import { Introduction } from './components/organisms/Introduction/Introduction';
import { Experience } from './components/organisms/Experience/Experience';
import { Projects } from './components/organisms/_Projects/Projects';
import { Contact } from './components/organisms/Contact/Contact';
import { Footer } from './components/organisms/Footer/Footer';

function App() {
  

  return (
    <>
    <Header/>
    <Introduction/>
    <Experience/>
    <Projects/>
    <Contact/>
    <Footer />
    
 
    </>
  )
}

export default App
