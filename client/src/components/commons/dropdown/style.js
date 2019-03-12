import styled from "styled-components";

export const DropdownContainer = styled.div`
   position : relative;
   margin-top: 2%;
`;

export const Select = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 3% 2%;
    width: 100%;
    border: 1px solid lightgray;
    align-items : center;
`;

export const Option = styled.div`
    border-bottom : 1px solid lightgray;
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
    border: 1px solid lightgray;
    border-top: none;
    width: 104%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.10);
    z-index: 1000;
`;
