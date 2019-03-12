import React from 'react';
import {connect} from "react-redux";
import {isEmpty, prop} from "ramda";
import {changePage} from "../../../actions";
import {PaginationContainer, PaginationItem} from "./style";

const totalPageCountProp = prop('totalPageCount');

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            carsPerPage: 10,
            fetchedCarsData : props.fetchedCarsData,
        };
       this.nextPage = this.nextPage.bind(this);
       this.previousPage = this.previousPage.bind(this);
       this.firstPage = this.firstPage.bind(this);
       this.lastPage = this.lastPage.bind(this);
    }

    firstPage() {
        const { currentPage } = this.state;
        const { changePage } = this.props;
        if(currentPage !== 1 ) {
            changePage(1);
            this.setState( {currentPage : 1});
        }

    }

    lastPage() {
        const { currentPage } = this.state;
        const { changePage } = this.props;
        if(currentPage !== 1 ) {
            changePage(1);
            this.setState( {currentPage : 1});
        }

    }
    nextPage() {
            const { currentPage, fetchedCarsData } = this.state;
            const { changePage } = this.props;
            if(!isEmpty(fetchedCarsData)) {
                console.log(Math.ceil(totalPageCountProp(fetchedCarsData)) > currentPage);
                console.log(fetchedCarsData);
                console.log(currentPage);
                console.log('hey')
            }
                changePage(currentPage + 1);
                this.setState( {currentPage : currentPage + 1});
    }

    previousPage() {
        const { currentPage } = this.state;
        const { changePage } = this.props;
        if(currentPage > 1 ) {
            changePage(currentPage - 1);
            this.setState( {currentPage : currentPage - 1});
        }
    }

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
