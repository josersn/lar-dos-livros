import React from 'react';
import { FiAlignLeft, FiVideo, FiBook, FiSearch } from "react-icons/fi";
import { AiFillAudio } from "react-icons/ai";

import { Container, MenuBarLink, MenuBarItem } from './styles';

const Aside = () => (
    <Container>

        <MenuBarLink to="/" title="Voltar para home">
            <MenuBarItem> <FiAlignLeft size={24} color="#fff" /> </MenuBarItem>
        </MenuBarLink>
        
        <MenuBarLink to="/" title="Livros">
            <MenuBarItem> <FiBook size={24} color="#fff" /> </MenuBarItem>
        </MenuBarLink>

        <MenuBarLink to="/video" title="Vídeos">
            <MenuBarItem> <FiVideo size={24} color="#fff" /> </MenuBarItem>
        </MenuBarLink>

        <MenuBarLink to="/podcasts" title="Podcats">
            <MenuBarItem> <AiFillAudio size={24} color="#fff" /> </MenuBarItem>
        </MenuBarLink>
      
        <MenuBarLink to="/search" title="Pesquisar">
            <MenuBarItem> <FiSearch size={24} color="#fff" /> </MenuBarItem>
        </MenuBarLink>
    </Container>
)

export default Aside;