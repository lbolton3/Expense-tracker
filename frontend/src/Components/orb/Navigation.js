import React from 'react'
import styled from 'styled-components'
import avatar from '../../img/avatar.png'
import { menuItems } from '../../utils/menuAssets'
import { signout } from '../../utils/icons'



const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 374px;
    height: 100%;
    background: rgba(252,246,249,0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    .user-con{
        height: 200px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img{
            width: 100px;
            height: 100px;
            border-radius: 5%;
            object-fit: cover;
            background-color: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0,0,0,0.06);
        }
        h2{
            color: rgba(34, 34, 96, 1);
        }
        p{
            color: rgba(34, 34, 96, .6)
        }
        .menu-items{
            flex: 1;
            display: flex;
            flex-direction:column;
            li{
                display: grid;
                grid-template-columns: 40px auto;

            }
        }
    }
    

`;
function Navigation() {
    console.log('menuItems:', menuItems);

    return (
        <NavStyled>
            <div className='user-con'>
                <img src={avatar} alt="" />
                <div className='text'>
                    <h2>Lennice</h2>
                    <p>Your Balance</p>
                </div>
            </div>
            <div>
                <ul className='menu-items'>
                    {menuItems.map((item) => {
                        console.log('Item:', item);
                        console.log('item.icon:', item.icon);
                        console.log('typeof item.icon:', typeof item.icon);
                        return <li
                            key={item.id}
                        >
                            {item.icon}
                            <span>{item.title}</span>
                        </li>
                    })}

                </ul>
                <div className="bottom-nav">
                    <li>
                        {signout} Sign Out
                    </li>
                </div>
            </div>
        </NavStyled>
    )
}


export default Navigation