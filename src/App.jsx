import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './components/_base/reset.scss';

import { Header } from './components/organisms/Header/Header'
import { Introduction } from './components/organisms/Introduction/Introduction';

function App() {
  

  return (
    <>
    <Header/>
    <Introduction/>
    
 
    </>
  )
}

export default App
