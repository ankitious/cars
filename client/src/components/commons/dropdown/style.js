import styled from "styled-components";

export const DropdownContainer = styled.div`
   position : relative;
   margin-top: 2%;
`;

export const Select = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2%;
    width: 95%;
    border: 1px solid #d3d3d3;
    align-items : center;
`;

export const Option = styled.div`
    border-bottom : 1px solid #d3d3d3;
    padding: 3% 2%;
    
    &:hover {
      background-color : #ec7f12;
      color : #fff;    
    }
`;

export const OptionsContainer = styled.div`
    background-color: #ffffff;
    overflow: hidden;
    position: absolute;
    border: 1px solid #d3d3d3;
    border-top: none;
    width: 99%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.10);
    z-index: 1000;
`;
