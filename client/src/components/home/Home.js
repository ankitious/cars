import React  from 'react';

import {Main} from "./style";
import Filters from "./filters/Filters";
import Section from "./section/Section";

const Home = () =>
            <>
                <Main>
                    <Filters />
                    <Section />
                </Main>
            </>;

export default Home;

