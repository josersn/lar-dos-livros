import styled from 'styled-components';
import media from "styled-media-query";
import { Link } from "gatsby";
export const Container = styled.aside`
    width: 4vw;
    background: #50BFA0;
    height: 100vh;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.2rem 0;

    ${media.lessThan("large")`
      border-top: 1px solid #fff;
      bottom: 0;
      flex-direction: row;
      height: auto;
      justify-content: space-around;
      padding: 0;
      padding-bottom: 10px;
      position: fixed;
      width: 100%;
    `}
    
`;

export const MenuBarLink = styled(Link)`
  display: block;
`

export const MenuBarItem = styled.span`
  display: block;
  position: relative;
  height: 1.3rem;
  cursor: pointer;
  padding: 1.1rem;
  margin-bottom: 1rem;
  color: #fff;
  `;

