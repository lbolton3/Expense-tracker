import React from 'react'
import styled from 'styled-components'
import avatar from '../../img/avatar.png'
function nav(){
    return(
        <navStyld>
            <div className='user'>
                <img src ={avatar} alt="" />
                <div className='text'>
                    <h2>Lennice</h2>
                    <p>Your Balance</p>
                </div>
            </div>
            <div>
                <ul className='menu-items'>
                    
                </ul>
            </div>
        </navStyld>
    )
}
const navStyld = styled.nav`
`;
export default nav