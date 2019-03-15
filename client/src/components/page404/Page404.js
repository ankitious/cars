import React  from 'react';
import logo from '../../assets/images/logo.png';
import {Link} from "react-router-dom";
import {LinkToHomePage, Page404Container} from "./style";

const Page404 = () =>
    <Page404Container>
      <img style={{ width: '200px'}} src={logo} alt={'Auto1 Logo'}/>
      <h2 style={{ fontSize: '32px'}}>404 - Not Found</h2>
      <div>Sorry, the page you are looking for does not exist.</div>
      <div>
          You can always go back to the
              <LinkToHomePage to="/"> homepage</LinkToHomePage>.
      </div>
    </Page404Container>;

export default Page404;

