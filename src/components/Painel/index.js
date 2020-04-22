import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { Container, First, Second, Frame, Title, Mobile} from './styles';

 
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
    
    const firstNode = allMarkdownRemark.edges[0];
    const rests = [allMarkdownRemark.edges[1], allMarkdownRemark.edges[2]];
    return(
    <Container>
        <Mobile>

        </Mobile>
        <First to={firstNode.node.fields.slug} data={firstNode.node.frontmatter.image} >
            <Title color={"#fff"}>{firstNode.node.frontmatter.title}</Title>
        </First>
        <Second>
            {rests.map(({node}, index) => (
                <Frame key={index} to={node.fields.slug} data={node.frontmatter.image} >
                </Frame>
            ))}
            
        </Second>
        

    </Container>
)}

export default Panel;