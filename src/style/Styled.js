import styled from "styled-components";

export const BtnShip = styled.button`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 10px;
  background: #1E1E1E;
  margin: 8px 200px 30px 200px;
  cursor: pointer;
  &: hover{
    background: grey;
  }
`;

export const TextShip = styled.p``;

export const ContenedorPrincipal = styled.div`
  position: relative;
`;

export const ContenedorSlideshow = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export const Slide = styled.div`
  min-width: 100%;
  overflow: hidden;
  transition: 0.3s ease all;
  z-index: 10;
  /* max-height: 500px; */
  position: relative;

  
`;

export const Controles = styled.div`
  position: absolute;
  top: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export const Boton = styled.button`
  pointer-events: all;
  color: rgba(255,255,255,0.7);
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  width: 50px;
  height: 56%;
  text-align: center;
  position: absolute;
  transition: 0.3s ease all;
  /* &:hover {
		color:white;
	} */

  ${(props) => (props.derecho ? "right: 80px" : "left: 0")}
`;