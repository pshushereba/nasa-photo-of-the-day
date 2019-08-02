import React from 'react'
import { Container } from 'semantic-ui-react';
import styled from 'styled-components';
import PhotoModal from "./PhotoModal";

const Paragraph = styled.p`
    // font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    line-height: 3rem;
    color: white;
`;

const Title = styled.h1`
    font-size: 2.5rem;
`;

const Info = (props) => {
    return (
        <>
            <Container >
                <Title>{ props.title }</Title>
                <h3>{ props.date }</h3>
                <h3>{ props.copyright }</h3>
                <Paragraph>{ props.explanation }</Paragraph>
                <PhotoModal />
            </Container>
        </>
    );
}

export default Info;