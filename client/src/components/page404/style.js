import styled from "styled-components";
import {Link} from "react-router-dom";

export const Page404Container = styled.div`
   display :flex;
   flex-direction : column;
   align-items : center;
   justify-content : center;
   height : 720px;
   font-size : 14px;
   line-height : 32px;
`;

export const LinkToHomePage = styled(Link)`
   text-decoration : none;
   color : #EA7F28;
   
    &:hover {
       text-decoration: underline;
        color : #D37324;
     }
   &:active {
     color : #D37324;
   }
`;
