import React from 'react';
import logo from '../../../assets/images/logo.png'
import {
    HeaderButtonsContainer,
    HeaderContainer,
    LogoImage,
    LogoImageContainer,
    MyOrdersButton,
    PurchaseButton,
    SellButton
} from "./style";
import {Link} from "react-router-dom";

const Header = () =>
    <HeaderContainer>
        <Link
            style ={{margin: '12px 24px'}}
            to="/"
        >
            <LogoImage src={logo} />
        </Link>
        <HeaderButtonsContainer>
            <PurchaseButton>Purchase</PurchaseButton>
            <MyOrdersButton>My Orders</MyOrdersButton>
            <SellButton>Sell</SellButton>
        </HeaderButtonsContainer>
    </HeaderContainer>;

export default Header;
