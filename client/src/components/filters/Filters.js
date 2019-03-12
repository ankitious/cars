import React from 'react';
import {
    FilterByColorContainer,
    FiltersContainer, FilterByManufactuersContainer,
} from "./style";
import Dropdown from "../commons/dropdown/Dropdown";
import {colors} from "../../constants/colors";
import {manufacturers} from "../../constants/manufacturers";

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
    </FiltersContainer>;

export default Filters;
