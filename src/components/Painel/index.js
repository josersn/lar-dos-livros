import React from 'react';

import { Container, First, Second, Frame, Title} from './styles';
const link = "https://uploaddeimagens.com.br/images/002/582/691/original/matter.png?1586544998";
const Panel = () => (
    <Container>
        <First to="/" data={link} >
            <Title color={"#000"}>Bem-vindo a Matter</Title>
        </First>
        <Second>
            <Frame to="/" >
            </Frame>
            <Frame to="/" >
            </Frame>
        </Second>

    </Container>
)

export default Panel;