import React from 'react'
import styled from 'styled-components';

const Img = styled.img`
    width: 50%;
`;


const Photo = (props) => {
    return (
        <>
            <Img src={props.photo} />
        </>
    );
}

export default Photo;