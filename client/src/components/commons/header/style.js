import styled from "styled-components";
export const HeaderContainer = styled.div`
   display : flex;
   justify-content : space-between;
   align-items: center;
   padding : 1% 0%;
   border-bottom : 1px solid #d3d3d3;
`;

export const LogoImageContainer = styled.div`
   margin: 1% 2%;

`;

export const LogoImage = styled.img`
    width: 60%;
`;

export const HeaderButtonsContainer = styled.div`
    display : flex;
    width: 25%;
    font-size: 18px;
    color : gray;
`;

export const PurchaseButton = styled.div`
   margin: 0% 5%;
   cursor : pointer;
   
   &:hover {
     color : #000;
   }
`;

export const MyOrdersButton = styled(PurchaseButton)`
`;

export const SellButton = styled(PurchaseButton)`
`;
