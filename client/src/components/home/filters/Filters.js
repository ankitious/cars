import React from 'react';
import {
    FilterByColorContainer,
    FiltersContainer, FilterByManufactuersContainer, FilterButton,
} from "./style";
import Dropdown from "../../shared/dropdown/Dropdown";
import {colors} from "../../../utility/constants/colors";
import {manufacturers} from "../../../utility/constants/manufacturers";
import { filterCarsByParams } from "../../../store/actions";
import {connect} from "react-redux";

class Filters extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            color : null,
            manufacturer : null
        };
    }

    colorSelection = (color) => {
        this.setState({color});
    };

    manufacturerSelection = (manufacturer) => {
        this.setState({manufacturer});
    };

    filterCars = () => {
       const { filterCarsByParams } = this.props;
       const { color, manufacturer } = this.state;
       filterCarsByParams(color, manufacturer);
    };

    render() {
        return(
            <FiltersContainer>
                <FilterByColorContainer>
                    <Dropdown
                        list={colors}
                        name={"Color"}
                        placeholder={"All Car Colors"}
                        selection={this.colorSelection}
                    />
                </FilterByColorContainer>

                <FilterByManufactuersContainer>
                    <Dropdown
                        list={manufacturers}
                        name={"Manufacturer"}
                        placeholder={"All manufacturers"}
                        selection={this.manufacturerSelection}
                    />
                </FilterByManufactuersContainer>

                <FilterButton onClick={this.filterCars}> Filter</FilterButton>
            </FiltersContainer>
        );
    }
}

const mapDispatchToProps = { filterCarsByParams };

export default connect(null,mapDispatchToProps)(Filters);
