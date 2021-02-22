import React from 'react';
import styled from 'styled-components';
import Pin from './Pin';
import './Mainboard.css';

function Mainboard(props) {

    let { pins } = props;
    
    return (
        <Wrapper>
            <Container className="mainboard_container">
                {pins.map((pin, index) => {
                    let {urls} = pin;                
                <Pin key={index} urls = {urls}/> 
                })}
            </Container>
        </Wrapper>
    )
}

export default Mainboard

const Wrapper = styled.div`
    background-color: white;
    display: flex;
    width: 100%;
    height: 100%;
    margin-top: 15px;
    justif-content: center;
`

const Container = styled.div`
    column-gap: 10px;
    margin: 0 auto;
    height: 100%;
    background-color: white;   
`