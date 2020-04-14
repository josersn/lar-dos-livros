import React from "react"

import Layout from "../components/layout"
import { Container, Wrapper } from "../styles/notfound";
import SEO from "../components/seo"
import Img from "../images/matter-working.svg"
import Aside from "../components/aside";
import GlobalStyle from "../styles/global";



const SearchPage = () => (
  <Container>
  <SEO title="Página de busca"/>
  <Aside />
  <Wrapper>
  <img src={Img} alt=""/>
  <h1>Infelizmente está página está em construção.</h1>
  <h2>Nossa equipe está correndo. Caso precise de ajuda entre em contato com a equipe.</h2>
  </Wrapper>
  <GlobalStyle background={true}/>
</Container>
)

export default SearchPage
