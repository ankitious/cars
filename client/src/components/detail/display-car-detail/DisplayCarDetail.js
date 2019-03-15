import {
    CarDescription,
    CarHeader,
    CarImageContainer,
    CarInformation,
    CarInformationContainer,
    LikeCarContainer, RemoveButton, SaveButton
} from "../style";
import {capitalize} from "../../../utility/index";
import React from "react";
import {loadFavorites, saveFavorites} from "../../../utility/localStorage";

class DisplayCarDetail extends React.Component {

     state = {favorite : false};

     componentDidMount() {
         const {car : {
             stockNumber
         } }= this.props;
         const faviourites = loadFavorites();
         this.setState({favorite : !!faviourites && faviourites.includes(stockNumber)})
     }

     setFavourite = () => {
         const {car : {
             stockNumber
         } }= this.props;
        const faviourites = loadFavorites();
        if(!!faviourites) {
            const faviouritesList = faviourites.split(',');
            faviouritesList.push(stockNumber);
            saveFavorites(faviouritesList.join(','));
        } else { saveFavorites(stockNumber);}
        this.setState({favorite : true});
    };

     removeFavourite = () => {
         const {car : {
             stockNumber } }= this.props;
        const faviourites = loadFavorites();
        const faviouritesList = faviourites.split(',');
        const updatedFaviouritesList = faviouritesList.filter(faviourite => faviourite !== stockNumber.toString());
        saveFavorites(updatedFaviouritesList.join(','));
         this.setState({favorite : false});
    };

    render() {
       const {car : {
            stockNumber,
                modelName,
                manufacturerName,
                color,
                mileage : { number , unit},
            fuelType}
        } = this.props;
       const { favorite } = this.state;
        return(
            <div>
                <CarImageContainer />
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
                    {  favorite ?
                        <LikeCarContainer>
                            This Car is in your Favorite List. Click on below button to remove it.
                            <RemoveButton
                                onClick={this.removeFavourite}
                            >Remove
                            </RemoveButton>
                        </LikeCarContainer> :
                        <LikeCarContainer>
                            <div>
                                If you like this car, click the button and save it in your collection of favourite items.
                            </div>
                            <SaveButton onClick={this.setFavourite}>Save</SaveButton>
                        </LikeCarContainer> }
                </CarInformationContainer>
            </div>
        )
    }
}

export default DisplayCarDetail;

