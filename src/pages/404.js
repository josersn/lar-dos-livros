import React from "react"
import { Container, Wrapper } from "../styles/notfound";
import SEO from "../components/seo"
import Img from "../images/matter-404.svg"
import Aside from "../components/Aside";
import GlobalStyle from "../styles/global";

const NotFoundPage = () => (
  <Container>
    <SEO title="Página não encontrada"/>
    <Aside />
    <Wrapper>
    <img src={Img} alt=""/>
    <h1>Infelizmente não encontramos sua página.</h1>
    <h2>Caso precise de ajuda entre em contato com a equipe.</h2>
    </Wrapper>
    <GlobalStyle background={true}/>
  </Container>
)

export default NotFoundPage
