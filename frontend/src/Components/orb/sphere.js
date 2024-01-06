// Sphere.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { WindowSize } from '../../utils/WindowSize';

function Sphere() {
  const { width, height } = WindowSize();
  console.log(width, height);

  const moveSphere = keyframes`
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(${width / 1.2}px, ${height / 2}px);
    }
    100% {
      transform: translate(0, 0);
    }
  `;

  const SphereStyled = styled.div`
    width: 70vh;
    height: 70vh;
    position: absolute;
    border-radius: 50%;
    margin-left: -35vh; /* Adjusted margin for centering */
    margin-top: -35vh;  /* Adjusted margin for centering */
    background: linear-gradient(180deg, #F56692 0%, #F2994A 100%);
    filter: blur(400px);
    animation: ${moveSphere} 15s alternate linear infinite;
  `;

  return <SphereStyled></SphereStyled>;
}

export default Sphere;




/*import React from 'react'
import styled, { keyframes } from 'styled-components';
import { WindowSize } from '../../utils/WindowSize';

function Sphere() {

    const {width, height} = WindowSize()
    console.log(width,height)


    const moveSphere = keyframes`
        0%{
            transform: translate(0,0);
        }
        50%{
            transform: translate(${width/2}px, ${height/2}px);
        }
        100%{
            transform: translate(0,0);
        }

    `
    const SphereStyled = styled.div`
        width: 70vh;
        height: 70vh;
        position: absolute;
        border-radius: 50%;
        margin-left: -37vh;
        margin-top: -37vh;
        background: linear-gradient(180deg,#F56692 0%, #F2994A 100%);
        filter: blur(100px);
        animation:${moveSphere} 1s alternate linear infinite;
    `;

    return (
        <SphereStyled></SphereStyled>
    )
}

export default Sphere;
*/