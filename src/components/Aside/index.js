import React from 'react';
// import { FiAlignLeft as Menu, FiVideo as Video, FiBook as Book, FiSearch as Search, FiMic as Mic } from "react-icons/fi";
import {FiAlignLeft as Menu} from "react-icons/fi";
import {FiVideo as Video} from "react-icons/fi";
import { FiBook as Book} from "react-icons/fi";
import { FiSearch as Search} from "react-icons/fi";
import { FiMic as Mic} from "react-icons/fi";
import { Container, MenuBarLink, MenuBarItem } from './styles';

const Aside = () => (
    <Container>
        <MenuBarLink to="/" title="Voltar para home">
            <MenuBarItem> <Menu size={24} color="#fff" /> </MenuBarItem>
        </MenuBarLink>
        
        <MenuBarLink to="/" title="Livros">
            <MenuBarItem> <Book size={24} color="#fff" /> </MenuBarItem>
        </MenuBarLink>
        <MenuBarLink to="/video" title="Vídeos">
            <MenuBarItem> <Video size={24} color="#fff" /> </MenuBarItem>
        </MenuBarLink>

        <MenuBarLink to="/podcasts" title="Podcats">
            <MenuBarItem> <Mic size={24} color="#fff" /> </MenuBarItem>
        </MenuBarLink>
      
        <MenuBarLink to="/search" title="Pesquisar">
            <MenuBarItem> <Search size={24} color="#fff" /> </MenuBarItem>
        </MenuBarLink>
    </Container>
)

export default Aside;