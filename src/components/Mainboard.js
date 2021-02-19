import React from 'react';
import styled from 'styled-components';
import Pin from './Pin';

function Mainboard() {
    return (
        <Wrapper>
            <Container>
                <Pin />
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
    background-color: white;
    display: flex;
    width: 80%;
`