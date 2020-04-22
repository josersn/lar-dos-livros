import React from "react";
import { Container } from "./styles";
import Image from "../../images/lar-dos-livros-bookweek.jpg"


const WeekBook = () =>(
    <Container>
        <h1>Leitura da Semana</h1>
            <img src={Image} alt="Leitura da Semana"/>
            <h2>Drácula  - <span> Bram Stoker </span> </h2>
    </Container>
 )

export default WeekBook;