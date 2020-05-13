import React from 'react';
import {connect} from 'react-redux';

const Total = props => {
  // console.log(`this is props inside Total`, props);
  return (
    <div className="content">
      <h4>Total Amount: ${props.price + props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  // console.log(`mSTP is working`, state);
  return {   
   price: state.car.price,
   additionalPrice: state.additionalPrice  
  }
}
export default connect (
  mapStateToProps,
  {}
)(Total);
