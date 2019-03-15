import React, { Component } from 'react';
import '../node_modules/normalize.css/normalize.css';
import Header from "./components/commons/header/Header";
import {fetchCars} from "./store/actions";
import {connect} from "react-redux";
import Home from "./components/home/Home";
import { BrowserRouter as Router } from 'react-router-dom';
import {Route, Switch} from "react-router-dom";
import Detail from "./components/detail/Details";
import Page404 from "./components/page404/Page404";
import {Container} from "./style";
class App extends Component {

    componentDidMount(){
        this.props.fetchCars();
    }
    render() {
        return (
            <Router>
                <Container>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/car/:id" component={Detail} />
                        <Route component={Page404} />
                    </Switch>
                    {/*<Footer />*/}
                </Container>
            </Router>
        );
    }
}

const mapDispatchToProps = { fetchCars };

export default connect(null,mapDispatchToProps)(App);
