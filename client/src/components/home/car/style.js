import styled from "styled-components";
import {Link} from "react-router-dom";
export const CarContainer = styled.div`
   display : flex;
   align-items : center;
   padding : 8px;
   border : 1px solid #EDEDED;
   margin-bottom : 8px;
`;

export const CarImage = styled.img`
   width : 100px;
`;

export const CarHeader = styled.h2`
   margin : 0;
   color : #4f4f4f;
   font-size : 18px;
`;

export const CarInformation = styled.div`
   line-height : 30px;
   padding : 0px 8px;
`;

export const CarImageContainer = styled.div`
    padding: 8px;
    margin-right: 8px;
`;
export const DetailsLink = styled(Link)`
    text-decoration : none;
    color : #ea7f38;
    font-size: 14px;
    
     &:active {
      color : #D37324;
    }
`;

