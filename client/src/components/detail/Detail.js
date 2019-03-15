import React  from 'react';
import {fetchCar} from "../../store/actions";
import {connect} from "react-redux";
import {isEmpty} from "ramda";
import Page404 from "../page404/Page404";
import DisplayCarDetail from "./display-car-detail/DisplayCarDetail";


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
                  <DisplayCarDetail car={carData.car}/>
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

