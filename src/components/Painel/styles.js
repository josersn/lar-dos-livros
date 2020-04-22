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
  
  
  
`;
export const Mobile = styled.div`
  display:none;

  ${media.lessThan("large")`
    display: flex;
  `}
`;
export const First = styled(Link)`
  width: calc(50% - 5px);
  height: 100%;
  background-image: ${props => props.data ? renderImg(props.data) : "https://api.adorable.io/avatars/285/abott@adorable.png"};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  transition: all 0.4s;
  ${media.lessThan("large")`
  display: none;
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
  display: none;
  `}


  `;
export const Frame = styled(Link)`
  width: 100%;
  height: calc(50% - 5px);
  /* background: #50bfa0; */
  background-image: ${props => props.data ? renderImg(props.data) : "https://api.adorable.io/avatars/285/abott@adorable.png"};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  transition: all 0.4s;
  opacity: 0.5;


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
