import styled from "styled-components";

export const HeaderContainer = styled.div`
   display : flex;
   justify-content : space-between;
   align-items: center;
   padding : 12px 8px;
   border-bottom : 1px solid #EDEDED;
   box-sizing: border-box;
   height: 80px;
   font-size: 14px;
`;

export const LogoImage = styled.img`
    width: 60%;
`;

export const HeaderButtonsContainer = styled.div`
    display : flex;
    color : #4a4a4a;
`;

export const PurchaseButton = styled.div`
   margin: 0px 12px;
   cursor : pointer;
   
   &:hover {
     color : #4A4A4A;
   }
`;

export const MyOrdersButton = styled(PurchaseButton)`
`;

export const SellButton = styled(PurchaseButton)`
`;
