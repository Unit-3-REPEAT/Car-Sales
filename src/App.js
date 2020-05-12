import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {connect} from 'react-redux';

const App = (props) => {
    // console.log(`props inside App -->`, props)
 

  return (
    <div className="boxes">
      <div className="box">
        <Header/>
        <AddedFeatures car={props.state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.state.additionalFeatures} />
        <Total car={props.state.car} additionalPrice={props.state.additionalPrice} />
      </div>
    </div>
  );
};


const mapStateToProps = state => {
  // console.log(`mSTP is working`, state);
  return {
    //We want the state to be returned because we want the entire object
    state    
  }
}
export default connect (
  mapStateToProps,
  {}
)(App);
