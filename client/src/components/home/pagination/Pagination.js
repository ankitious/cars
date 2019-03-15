import React from 'react';
import {connect} from "react-redux";
import {isEmpty, prop} from "ramda";
import {changePage} from "../../../store/actions";
import {PaginationContainer, PaginationItem} from "./style";

const totalPageCountProp = prop('totalPageCount');

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            carsPerPage: 10,
        };
    }

    componentWillReceiveProps(nextProps){
        const { cars : { totalPageCount }  } = nextProps;
        if(totalPageCount < this.state.currentPage){
            this.setState({currentPage: 1 });
        }
    }

    firstPage = () => {
        const { currentPage } = this.state;
        const { changePage } = this.props;
        if(currentPage !== 1 ) {
            changePage(1);
            this.setState( {currentPage : 1});
        }
    };

    lastPage = () => {
        const { currentPage } = this.state;
        const { changePage, cars } = this.props;
        if(currentPage !== totalPageCountProp(cars) ) {
            changePage(totalPageCountProp(cars));
            this.setState( {currentPage : totalPageCountProp(cars)});
        }
    };
    nextPage = () => {
        const { currentPage } = this.state;
        const { changePage, cars  } = this.props;
        if(!isEmpty(cars) && Math.ceil(totalPageCountProp(cars)) > currentPage) {
            changePage(currentPage + 1);
            this.setState( {currentPage : currentPage + 1});
        }
    };

    previousPage = () => {
        const { currentPage } = this.state;
        const { changePage } = this.props;
        if(currentPage > 1 ) {
            changePage(currentPage - 1);
            this.setState( {currentPage : currentPage - 1});
        }
    };

    render() {
        const { cars : fetchedCarsData } = this.props;
        const { currentPage } = this.state;
        return(
            <PaginationContainer>
              <PaginationItem
                  onClick={this.firstPage}
              >
                  First
              </PaginationItem>
              <PaginationItem
                  onClick={this.previousPage}
              >
                  Previous
              </PaginationItem>
              <PaginationItem
                  pageNoText={true}
              >
                  Page {currentPage} of {Math.ceil(totalPageCountProp(fetchedCarsData))}
              </PaginationItem>
              <PaginationItem
                  onClick={this.nextPage}
              >
                  Next
              </PaginationItem>
              <PaginationItem
                  onClick={this.lastPage}
              >
                  Last
              </PaginationItem>
            </PaginationContainer>
        )
    }
};
const mapDispatchToProps = { changePage };

export default connect(null,mapDispatchToProps)(Pagination);
