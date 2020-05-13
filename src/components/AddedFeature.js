import React from 'react';
import {connect} from 'react-redux'
import {removeFeature} from '../actions/actions';




const AddedFeature = props => {
  // console.log(`this is props inside AddedFeature`, props)


  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      {console.log(props.feature.name)}
      <button
      onClick={() => props.removeFeature(props.feature)}  
       className="button">X</button>
      {props.feature.name}
    </li>
  );
};


//Step 3 connect component to the redux store - import connect
export default connect (
  null,
  {removeFeature} // this takes in action creator
)(AddedFeature);


