import React, { Component } from 'react';
import '../node_modules/normalize.css/normalize.css';
import Header from "./components/shared/header/Header";
import {fetchCars} from "./store/actions";
import {connect} from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';
import {Container} from "./style";
import Routes from "./Routes";
import Footer from "./components/shared/footer/Footer";
class App extends Component {

    componentDidMount(){
        this.props.fetchCars();
    }
    render() {
        return (
            <Router>
                <Container>
                    <Header/>
                    <Routes/>
                    <Footer />
                </Container>
            </Router>
        );
    }
}

const mapDispatchToProps = { fetchCars };

export default connect(null,mapDispatchToProps)(App);
