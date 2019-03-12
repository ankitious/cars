import React, { Component } from 'react';
import '../node_modules/normalize.css/normalize.css';
import Header from "./components/commons/header/Header";
import {Main} from "./style";
import Filters from "./components/home/filters/Filters";
import Section from "./components/home/section/Section";
import {fetchCars} from "./actions";
import {connect} from "react-redux";
class App extends Component {

    componentDidMount(){
        this.props.fetchCars();
    }
    render() {
        return (
            <div>
                {/*<Header />*/}
                <Main>
                    <Filters />
                    <Section />
                </Main>
            </div>
        );
    }
}

const mapDispatchToProps = { fetchCars };

export default connect(null,mapDispatchToProps)(App);
