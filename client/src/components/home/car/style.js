import styled from "styled-components";
import {Link} from "react-router-dom";
export const CarContainer = styled.div`
   display : flex;
   align-items : center;
   padding : 10px;
   border : 1px solid #d3d3d3;
   margin-bottom : 10px;
`;

export const CarImage = styled.img`
   width : 100px;
`;

export const CarHeader = styled.h2`
   margin : 0;
   color : #4f4f4f;
`;

export const CarInformation = styled.div`
   line-height : 30px;
   padding : 0px 10px;
`;

export const CarImageContainer = styled.div`
    padding: 5px;
    margin-right: 5px;
`;
export const DetailsLink = styled(Link)`
    text-decoration : none;
    color : #ec7f12;
`;
