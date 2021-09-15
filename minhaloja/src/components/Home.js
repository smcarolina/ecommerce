import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Logo = styled.img`
    width: 50px;
`
const Menu = styled.a`
    margin: 5px;
`

const Background = styled.img`
    width: 100vw;
`
export default class Home extends React.Component {
    render() {
        return (
            <main>
                <Background src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"/>
                <Header>
                    
                    <div>
                        <Logo src="https://icons-for-free.com/iconfiles/png/512/cloud+queue+24px-131985219233092355.png" />
                    </div>
                    <nav>
                        <Menu href="">Home</Menu>
                        <Menu href="">Shop</Menu>
                        <Menu href="">About</Menu>
                        <Menu href="">Cart</Menu>
                    </nav>
                </Header>

            </main>
        )
    }
}