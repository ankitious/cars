import React from 'react';
import logo from '../../../assets/images/logo.png'
import {
    HeaderButtonsContainer,
    HeaderContainer,
    LogoImage,
    LogoImageContainer,
    MyOrdersButton,
    PurchaseButton, SellButton
} from "./style";

const Header = () =>
    <HeaderContainer>
        <LogoImageContainer>
            <LogoImage src={logo} />
        </LogoImageContainer>
        <HeaderButtonsContainer>
            <PurchaseButton>Purchase</PurchaseButton>
            <MyOrdersButton>My Orders</MyOrdersButton>
            <SellButton>Sell</SellButton>
        </HeaderButtonsContainer>
    </HeaderContainer>;

export default Header;
