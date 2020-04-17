import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { Container, First, Second, Frame, Title} from './styles';
const link = "https://uploaddeimagens.com.br/images/002/582/691/original/matter.png?1586544998";
const Panel = () => {

    const { allMarkdownRemark } = useStaticQuery(
        graphql`
        query frames {
            allMarkdownRemark(filter: {frontmatter: {category: {eq: "High"}}}, sort: {order: DESC, fields: frontmatter___date}) {
                edges {
                  node {
                    frontmatter {
                      title
                      image
                    }
                    fields {
                      slug
                    }
                  }
                }
              }
            }
          `
    );

    const firstNode = allMarkdownRemark.edges.nodes;
    console.log(firstNode);
    return(
    <Container>
        <First to="/" data={link} >
            <Title color={"#fff"}>Bem-vindo ao Lar Dos Livros</Title>
        </First>
        <Second>
            <Frame to="/" >
            </Frame>
            <Frame to="/" >
            </Frame>
        </Second>

    </Container>
)}

export default Panel;