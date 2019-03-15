import React from 'react';
import {SectionBody, SectionContainer, SectionHeader} from "./style";
import Dropdown from "../../commons/dropdown/Dropdown";
import {map, isEmpty, prop, compose, gt, length, always, ifElse, __, multiply} from 'ramda';
import {connect} from "react-redux";
import Car from "../car/Car";
import Pagination from "../pagination/Pagination";
import {sort} from "../../../utility/constants/sortByMileage";
import {sortByMileage} from "../../../store/actions";

const CarList = map(Car);
const carsProp = prop('cars');
const totalPageCountProp = prop('totalPageCount');
const displayCars = compose(CarList, carsProp);
const gt1 = gt(__, 1);

const numberOfCarsOnPage = ifElse(
    compose(gt1,totalPageCountProp),
    always(10),
    compose(length,carsProp)
);

const totalCars = ifElse(
    compose(gt1,totalPageCountProp),
    compose(multiply(10), totalPageCountProp),
    compose(length,carsProp)
);

const updateSortValue = v => ({
    "Mileage - Ascending" : "asc",
    "Mileage - Descending" : "des",
}[v]);

class Section extends React.Component {

    sortSelection(v) {
        const { sortByMileage } = this.props;
        compose(sortByMileage, updateSortValue)(v);
    }
    render() {
        const { cars : fetchedCarsData } = this.props;
        return(
            <SectionContainer>
                <SectionHeader>
                    <div>
                        <h2 style={{ fontSize : '18px'}}> Available Cars </h2>
                        <div style={{ fontSize : '18px'}}> Showing {numberOfCarsOnPage(fetchedCarsData)} of {totalCars(fetchedCarsData)} results </div>
                    </div>
                    <div style={{width: '40%', fontSize : '14px'}}>
                        <Dropdown
                            list={sort}
                            name={"Sort By"}
                            placeholder={"None"}
                            selection={this.sortSelection.bind(this)}
                        />
                    </div>
                </SectionHeader>

                <SectionBody>
                    {   !isEmpty(fetchedCarsData)
                           && displayCars(fetchedCarsData)
                    }
                </SectionBody>
                <Pagination cars={fetchedCarsData}/>
            </SectionContainer>

        );
    }
}

export const mapStateToProps = state => {
    const { cars : carsData } = state;
    const { fetching, cars, error } = carsData || {
        fetching: true,
        cars: {},
    };
    return {
        fetching,
        cars,
        error,
    };
};

export const mapDispatchToProps = { sortByMileage };

export default connect(mapStateToProps, mapDispatchToProps)(Section);
