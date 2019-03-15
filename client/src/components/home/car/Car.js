import React  from 'react';
import {CarContainer, CarHeader, CarImage, CarImageContainer, CarInformation, DetailsLink} from "./style";
import {capitalize} from "../../../utility";

const Car = ({
                 stockNumber,
                 modelName,
                 manufacturerName,
                 color,
                 mileage : { number , unit},
                 fuelType,
                 pictureUrl
       }) =>
    <CarContainer
        key={modelName + ' ' + stockNumber}>
        <CarImageContainer>
            <CarImage
                src={pictureUrl}
                alt={manufacturerName +  ' '+  modelName}
            />
        </CarImageContainer>
        <CarInformation>
            <CarHeader>{manufacturerName +  ' '+  modelName}</CarHeader>
            <div style={{fontSize : '14px'}}> Stock # {stockNumber} - { number + ' '+ unit.toUpperCase()} - {fuelType} - {capitalize(color)}  </div>
            <DetailsLink
                to={"cars/" + stockNumber}
                state = {
                    stockNumber
                }
            > View details
            </DetailsLink>
        </CarInformation>

    </CarContainer>;

export default Car;

