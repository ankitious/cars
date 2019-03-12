import React from 'react';
import {
    FilterByColorContainer,
    FiltersContainer, FilterByManufactuersContainer, FilterButton,
} from "./style";
import Dropdown from "../../commons/dropdown/Dropdown";
import {colors} from "../../../constants/colors";
import {manufacturers} from "../../../constants/manufacturers";
import { filterCarsByParams } from "../../../actions";
import {connect} from "react-redux";

class Filters extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            color : null,
            manufacturer : null
        };
        this.filterCars = this.filterCars.bind(this);
        this.colorSelection = this.colorSelection.bind(this);
        this.manufacturerSelection = this.manufacturerSelection.bind(this);
    }

    colorSelection(color) {
        this.setState({color});
    }

    manufacturerSelection(manufacturer) {
        this.setState({manufacturer});
    }

    filterCars() {
       const { filterCarsByParams } = this.props;
       const { color, manufacturer } = this.state;
       filterCarsByParams(color, manufacturer);
    }

    render() {
        return(
            <FiltersContainer>
                <FilterByColorContainer>
                    <Dropdown
                        list={colors}
                        name={"Colors"}
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
