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
  return(
    <AppStyled bg={bg} className="App">
      <Sphere/>
      <MainLayout>
        <Navigation/>
      </MainLayout>
    </AppStyled>
  )
}


export default App;