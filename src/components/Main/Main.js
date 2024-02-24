import React from 'react'
import './Main.scss'
import FirstContainer from './Fisrt_Container/FirstContainer'
import SecondContainer from './SecondContainer/SecondContainer'
import ThirdContainer from './Third_Container/ThirdContainer'
import Deals from './Deals/Deals'
import SignUp from './SignUp/SignUp'

const Main = () => {
  return (
    <>
    
    <div className='container'>
      <div className="main">

      <FirstContainer></FirstContainer>
      <SecondContainer></SecondContainer>
      <ThirdContainer></ThirdContainer>
      <Deals></Deals>
      <SignUp></SignUp>
      </div>
      </div>
    </>
  )
}

export default Main
