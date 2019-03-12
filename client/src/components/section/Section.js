import React from 'react';
import {SectionBody, SectionContainer, SectionHeader} from "./style";
import Dropdown from "../commons/dropdown/Dropdown";
import {colors} from "../../constants/colors";

const Section = () =>
    <SectionContainer>
        <SectionHeader>
            <div>
                <h2> Available Cars </h2>
                <h4> Showing 10 of 100 results </h4>
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

        </SectionBody>
    </SectionContainer>;

export default Section;
