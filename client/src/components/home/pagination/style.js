import styled from "styled-components";

export const PaginationContainer = styled.div`
  display : flex;
  justify-content: center;
  align-items : center;
  font-size: 14px;
 
  @media (max-width: 512px) {
       flex-direction : column;
   }
`;

export const PaginationItem = styled.div`
  padding : 8px 12px;
  margin : 0px 12px;
  color : ${props => !!props.pageNoText ? '#4A4A4A' : '#EA7F38' };
  cursor : ${props => !props.pageNoText && 'pointer' };
`;
