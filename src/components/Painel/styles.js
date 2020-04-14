import styled from 'styled-components';
import { Link } from "gatsby";
import media from "styled-media-query";
function renderImg(img){
  return `url(${img})`
}

export const Container = styled.div`
  width: 100%;
  height: 60vh;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  ${media.lessThan("large")`
    height: 100vh;
  `}
  
  
`;
export const First = styled(Link)`
  width: calc(50% - 5px);
  height: 100%;
  background: #50bfa0;
  /* background-image: ${props => props.data ? renderImg(props.data) : "https://api.adorable.io/avatars/285/abott@adorable.png"}; */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  transition: all 0.4s;

  ${media.lessThan("large")`
    width: 100%;
    height: calc(50vh - 5px);
  `}


  &:hover{
    transform: scale(1.1);
    color: #50bfa0;
    border: 6px solid #fff;
  }

  
`;
export const Second = styled.div`
  width: calc(50% - 5px);
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;


  ${media.lessThan("large")`
    width: 100%;
    height: calc(50vh - 5px);
  `}
  `;
export const Frame = styled(Link)`
  width: 100%;
  height: calc(50% - 5px);
  background: #50bfa0;
  transition: all 0.4s;


  &:hover{
    transform: scale(1.1);
    color: #50bfa0;
  }

  img{
    width: 100%;
    height: 100%;
    opacity: 0.7;
  }
`
export const Title = styled.h1`
  color: ${props => props.color ? props.color : "#fff"};
  font-size: 16pt;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #cecece69;
  position: absolute;
  bottom: 0;
  width: 100%;
 
`;
