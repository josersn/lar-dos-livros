import styled from 'styled-components';
import media from "styled-media-query";
import { Link } from "gatsby";

export const Container = styled.section`
  width: 80%;
  height: 220px;
  box-shadow: 40px 48px 6px -12px rgba(206,206,206,0.86);
  margin: 2rem auto;
  ${media.lessThan("large")`
    width: 95%; 
    border: thin solid #cecece69;
  `}

  &:hover{
        color: #50BFA0;
    border: thin solid #50BFA0;
    }
    
`;
export const PostLink = styled(Link)`
   width: 100%;
   height: 100%;
   text-decoration: none;
   color: #707070;
   display: flex;
    &:hover{
        color: #50BFA0;
    }
`
export const Img = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
    ${media.lessThan("large")`
      width: 50%; 
  `}
  }
`
export const Content = styled.div`
  width: 60%;
  padding-left: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`
