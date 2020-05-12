import React from 'react';
//Step 3 - part of step 3
import {connect} from 'react-redux';

//Connect is kinda like custom hooks in sence that is meant to
//extend logic onto components

const AdditionalFeature = props => {
  console.log(`props`, props)
  
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

//Step 4 - create mapStateToProps
//mSTP bring the state from reducer into the props of the AdditionalFeature component
//and merges them together - it returns the object and each property is added to the props
//of the connected component
const mapStateToProps = state => {
  console.log(`mSTP is working`, state);
  return {
    name: "banana",
    
  }
}

//Step 3 connect component to the redux store - import connect
export default connect (
  mapStateToProps,
  {} // this takes in action creator
)(AdditionalFeature);

//connect gets called twice
//first call we pass in the mapsStateToProps and an object
//second call we pass in the component we want to connect to redux store

//action creators
//inside connect

//UNDER THE HOOD CONNECT DOES THIS
// dispatch(toggleEdditing()) ==> dispatch({type: "TOGGLE_EDITING"})
//connect adds the action creator function to props - when props.xxx is called, connect
//will call dispatch and dispatch the returned action object

