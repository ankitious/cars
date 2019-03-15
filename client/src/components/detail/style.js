import styled from "styled-components";

export const CarHeader = styled.h1`
  font-size : 32px;
`;

export const CarInformation = styled.div`
   line-height : 30px;
   padding : 0px 8px;
   line-height: 35px;
   width : 55%;
   margin-bottom : 24px;
   
   @media (max-width: 512px) {
         width : 100%;
   }
`;

export const CarDescription = styled.div`
    line-height: 20px;
    font-size : 14px;
`;

export const LikeCarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: 12px;
    line-height: 20px;
    padding: 24px;
    border: 1px solid #EDEDED;
    width : 25%;
    margin-bottom : 24px;
    
   @media (max-width: 512px) {
         width : 85%;
         padding: 12px;
   }
`;

export const CarInformationContainer = styled.div`
    display: flex;
    width: 90%;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    
     @media (max-width: 512px) {
        display : block;
      }
`;

export const CarImageContainer = styled.div`
    width : 100%;
    background-color : #EDEDED;
    height : 500px;
    
     @media (max-width: 512px) {
         height : 300px;
   }
`;

export const SaveButton = styled.div`
    padding: 4px 24px;
    margin: 12px 0px;
    color: #ffffff;
    background-color: #EA7F28;
    cursor: pointer;
    text-align: center;
    border-radius: 2px;
    width: 55px;
    box-sizing: content-box;
      &:active {
    background-color : #D37324;
    }
`;
