import React  from 'react';
import {fetchCar} from "../../store/actions";
import {connect} from "react-redux";
import {capitalize} from "../../utility";
import {isEmpty} from "ramda";
import Page404 from "../page404/Page404";
import {
    CarDescription,
    CarHeader,
    CarInformation,
    CarInformationContainer,
    LikeCarContainer,
    CarImageContainer,
    SaveButton
} from "./style";

const displayCarInformation = (
    {car : {
        stockNumber,
        modelName,
        manufacturerName,
        color,
        mileage : { number , unit},
        fuelType}
    }) =>
    <div>
        <CarImageContainer></CarImageContainer>
        <CarInformationContainer>
            <CarInformation>
                <CarHeader>{manufacturerName +  ' '+  modelName}</CarHeader>
                <div style={{fontSize : '18px', marginBottom : '12px'}}
                >
                    Stock # {stockNumber} - { number + ' '+ unit.toUpperCase()} - {fuelType} - {capitalize(color)}
                </div>
                <CarDescription
                >
                    This car is currently available and can be delivered as soon as tomorrow morning. Please be aware that delivery times shown in this page are not definitive and may change due to bad weather conditions.
                </CarDescription>
             </CarInformation>
             <LikeCarContainer>
                <div>
                    If you like this car, click the button and save it in your collection of favourite items.
                </div>
                <SaveButton>Save</SaveButton>
             </LikeCarContainer>
        </CarInformationContainer>
    </div>;


class Detail extends React.Component {

  componentDidMount() {
      const { fetchCar } = this.props;
      const { id : stockNumber } = this.props.match.params;
      fetchCar(stockNumber);
  }

  render() {
      const {
          car : carData, error
      } = this.props;
      return (
          <div>
              {
                  !isEmpty(carData) &&
                  displayCarInformation(carData)
              }
              {
                  !!error &&
                  <Page404/>
              }
          </div> );
  }
}


export const mapStateToProps = state => {
    const { car : carData } = state;
    const { fetching, car, error } = carData || {
        fetching: true,
        car: {},
    };
    return {
        fetching,
        car,
        error,
    };
};

const mapDispatchToProps = { fetchCar };

export default connect(mapStateToProps,mapDispatchToProps)(Detail);

