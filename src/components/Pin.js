import React from 'react';
import styled from 'styled-components';

function Pin() {
    return (
        <Wrapper>
            <Container>
                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80" />
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