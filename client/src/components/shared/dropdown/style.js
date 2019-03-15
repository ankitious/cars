import styled from "styled-components";

export const DropdownContainer = styled.div`
   position : relative;
   margin-top: 2%;
`;

export const Select = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 8px;
    box-shadow: inset 0 0 0 1px #EDEDED;
    transition: color 0.25s;
    align-items : center;
    position: relative;
    vertical-align: middle;

  &::before,
  &::after {
    box-sizing: inherit;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid transparent;
    width: 0;
    height: 0;
  }

  &::before {
    top: 0;
    left: -1px;
  }
  
  &::after {
    bottom: 0;
    right: -1px;
  }
  
  &:hover::before,
  &:hover::after {
    width: 100%;
    height: 100%;
  }

  &:hover::before {
    border-top-color: #EA7F28; 
    border-right-color: #EA7F28;
    transition:
      width 0.25s ease-out, 
      height 0.25s ease-out 0.25s; 
  }

  &:hover::after {
    border-bottom-color: #EA7F28; 
    border-left-color: #EA7F28;
    transition:
      border-color 0s ease-out 0.5s, 
      width 0.25s ease-out 0.5s, 
      height 0.25s ease-out 0.75s; 
  }
`;

export const Option = styled.div`
    border-bottom : 1px solid #EDEDED;
    padding: 8px;
    
    &:hover {
      background-color : #ea7f38;
      color : #fff;    
    }
    
     &:active {
      background-color : #D37324;
    }
`;

export const OptionsContainer = styled.div`
    background-color: #ffffff;
    overflow: hidden;
    position: absolute;
    border: 1px solid #EDEDED;
    border-top: none;
    width: 99%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.10);
    z-index: 1000;
`;
