import styled from "styled-components";
export const FiltersContainer = styled.div`
    width: 25%;
    height: 210px;
    margin: 24px;
    padding: 24px;
    border: 1px solid #EDEDED;
    font-size : 14px;
   
   @media (max-width: 700px) {
             margin: 12px;
             padding: 12px;
             width : 85%;
   }
`;

export const FilterByColorContainer = styled.div`

`;

export const FilterByManufactuersContainer = styled.div``;

export const FilterButton = styled.div`
    background-color: #ea7f38;
    color: #fff;
    width: 128px;
    align-items : center;
    justify-content : center;
    height : 32px;
    display : flex;
    float: right;
    margin-top: 5%;
    cursor: pointer;
    padding: 0px 8px;
    
    &:active {
      background-color : #D37324;
    }
`;
