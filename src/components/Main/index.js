import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

import { Container, GroupPost, First, Body} from './styles';
import Post from "../Post";
import Panel from "../Painel";
import Second from "../Second";


const Main = () => {

    const { allMarkdownRemark } = useStaticQuery(
        graphql`
        query AllPosts {
            allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC})  {
                edges {
                  node {
                    frontmatter {
                      category
                      date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
                      description
                      title
                      image
                    }
                    fields {
                      slug
                    }
                    timeToRead
                  }
                }
              }
          }
          `
    );

    const allPost = allMarkdownRemark.edges;
    return(
    <Container>
        <Panel />
        <Body>
        <First>
            <GroupPost>
                <h1>Últimas Postagens</h1>
                {allPost.map(({ node: {frontmatter: {title, image}, fields: {slug}}}, index) => (
                    <Post title={title} key={index} slug={slug} image={image}/>
    ))}
            </GroupPost>
        </First>

        <Second>
        </Second>
        </Body>
        
    </Container>
)};
export default Main;
