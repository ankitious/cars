import styled from "styled-components";

export const PaginationContainer = styled.div`
  display : flex;
  justify-content: center;
`;

export const PaginationItem = styled.div`
  padding : 5px 10px;
  margin : 0px 10px;
  color : ${props => !!props.pageNoText ? '#000' : '#ec7f12' };
`;
