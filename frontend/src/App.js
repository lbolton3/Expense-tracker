import React, {useState,useMemo} from 'react'
import bg from './img/bg.png'
import {MainLayout} from './styles/Layouts'
import Sphere from "./Components/orb/sphere";
import Navigation from './Components/orb/Navigation';
import styled from 'styled-components'

const AppStyled = styled.div`
  height: 100vh;
  background-image:url(${props => props.bg}) 
  position: relative;

`;

function App(){
  const [active,setActive] = React.useState(1)
  const sphereMemo = useMemo(()=>{
    return <Sphere/>

  },[])
  return(
    <AppStyled bg={bg} className="App">
      {sphereMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive}/>
      </MainLayout>
    </AppStyled>
  )
}


export default App;