import styled from 'styled-components';
import media from "styled-media-query";
export const Container = styled.div`
  width: 85vw;
  margin: 0 0 0 10vw;
  padding: 2rem;
  background: #fff;
  border: 0;
  ${media.lessThan("large")`width: 100%; margin : 0;`}
`;
export const Body = styled.main`
  display:flex;
`
export const GroupPost = styled.div`
  
  .title{
    color: #50BFA0;
  }
`

export const First = styled.div`
  width: 60%;
  ${media.lessThan("large")`width: 100%; margin : 0;`}

`;
