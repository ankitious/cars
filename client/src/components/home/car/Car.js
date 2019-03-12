import React  from 'react';
import {CarContainer, CarHeader, CarImage, CarImageContainer, CarInformation, DetailsLink} from "./style";

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
            <DetailsLink to={"car/" + modelName+" " + stockNumber}> View details</DetailsLink>
        </CarInformation>

    </CarContainer>;

export default Car;

