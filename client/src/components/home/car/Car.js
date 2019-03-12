import React  from 'react';
import {CarContainer, CarHeader, CarImage, CarImageContainer, CarInformation} from "./style";

const Car = ({stockNumber,
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
            <div> Stock # {stockNumber} - { number + ' '+ unit} - {fuelType} - {color}  </div>
            <a href=""> View details</a>
        </CarInformation>

    </CarContainer>;

export default Car;

