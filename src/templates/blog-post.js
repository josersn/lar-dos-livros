import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import { Container, Main } from "../components/blog-post/styled";
import * as S from "../components/blog-post/styled"
import Global from "../styles/global";
import Aside from "../components/Aside";

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Container>
        <Global background={true}/>
        <Aside />
      <Main>
      <SEO title={post.frontmatter.title} />
      
        <S.PostHeader>
            <S.PostDate>
            {post.frontmatter.date} • {post.timeToRead + 1} min de leitura
            </S.PostDate>
            <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
            <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
        </S.PostHeader>
        <S.MainContent>
            <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        </S.MainContent>
      </Main>
    </Container>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        description
      }
      timeToRead
      html
    }
  }
`

export default BlogPost