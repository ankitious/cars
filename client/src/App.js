import React, { Component } from 'react';
import '../node_modules/normalize.css/normalize.css';
import Header from "./components/commons/header/Header";
import {Main} from "./style";
import Filters from "./components/filters/Filters";
import Section from "./components/section/Section";
class App extends Component {


    render() {
        return (
            <div>
                <Header />
                <Main>
                    <Filters />
                    <Section />
                </Main>
            </div>
        );
    }
}
export default App;
