import styled from 'styled-components';
import media from "styled-media-query";
export const Container = styled.div`
   width: 40%;
   padding: 1rem 3rem;
   border-left: 1px solid #50BFA0;
   background: #50BFA0;
   ${media.lessThan("large")`
      display: none;
   `}
`;
