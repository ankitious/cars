import React from 'react';
import {
    FilterByColorContainer,
    FiltersContainer, FilterByManufactuersContainer, FilterButton,
} from "./style";
import Dropdown from "../../commons/dropdown/Dropdown";
import {colors} from "../../../constants/colors";
import {manufacturers} from "../../../constants/manufacturers";

const Filters = () =>
    <FiltersContainer>
        <FilterByColorContainer>
           <Dropdown
               list={colors}
               name={"Colors"}
               placeholder={"All Car Colors"}
           />
        </FilterByColorContainer>

        <FilterByManufactuersContainer>
            <Dropdown
                list={manufacturers}
                name={"Manufacturer"}
                placeholder={"All manufacturers"}
            />
        </FilterByManufactuersContainer>

        <FilterButton> Filter</FilterButton>
    </FiltersContainer>;

export default Filters;
