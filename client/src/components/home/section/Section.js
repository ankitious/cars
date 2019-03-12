import React from 'react';
import {SectionBody, SectionContainer, SectionHeader} from "./style";
import Dropdown from "../../commons/dropdown/Dropdown";
import {colors} from "../../../constants/colors";
import {map, isEmpty, prop, compose, gt, length, always, ifElse, __, multiply} from 'ramda';
import {connect} from "react-redux";
import Car from "../car/Car";
import Pagination from "../pagination/Pagination";

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

class Section extends React.Component {

    render() {
        const { cars : fetchedCarsData } = this.props;
        return(
            <SectionContainer>
                <SectionHeader>
                    <div>
                        <h2> Available Cars </h2>
                        <h4> Showing {numberOfCarsOnPage(fetchedCarsData)} of {totalCars(fetchedCarsData)} results </h4>
                    </div>
                    <div style={{width: '25%'}}>
                        <Dropdown
                            list={colors}
                            name={"Sort By"}
                            placeholder={"None"}
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

export default connect(mapStateToProps)(Section);
