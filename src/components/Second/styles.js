import styled from 'styled-components';
import media from "styled-media-query";
export const Container = styled.div`
   width: 40%;
   border-left: 1px solid #50BFA0;
   padding: 1rem;
   ${media.lessThan("large")`
      display: none;
   `}

   .iframe{
      display: flex;
      justify-content: center;
   }
   
`;
