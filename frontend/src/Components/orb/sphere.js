import React from 'react'
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
            transform: translate(300px,500px);
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
        animation:${moveSphere} 15s alternate linear infinite;
    `;

    return (
        <SphereStyled></SphereStyled>
    )
}

export default Sphere;
