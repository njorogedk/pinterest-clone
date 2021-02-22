import React from 'react';
import styled from 'styled-components';

function Pin(props) {

    let {urls} = props;
    
    return (
        <Wrapper>
            <Container>
                <img src= {urls?.regular} alt="pin"/>
            </Container>
        </Wrapper>
    )
}

export default Pin

const Wrapper = styled.div`
    display: inline-flex;
    padding: 8px;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    width: 236px;

    img {
        display: flex;        
        width: 100%;
        cursor: zoom-in;
        border-radius: 16px;
        object-fit: cover;
    }
`

// Til-KGT42LkGcuQ3TRZ1wzqI37zG0nuQsPq2y0fsRys
// uNGsCI7MOY4BkeZKW4Z4y_kgcTjq9FUW6Iae-vrmAEw

// https://www.youtube.com/watch?v=wV734HJbrpc&ab_channel=CleverProgrammer&ck_subscriber_id=1060754570
