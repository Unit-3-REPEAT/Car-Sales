import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import {connect} from 'react-redux';

const AdditionalFeatures = props => {

  // console.log(`this is props inside AdditionalFeatures`, props);

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};


const mapStateToProps = state => {
  // console.log(`mSTP is working`, state);
  return {
    //We want the state to be returned because we want the entire object
    additionalFeatures: state.additionalFeatures,
    features: state.car.features   
  }
}


export default connect (
  mapStateToProps,
  {} // this takes in action creator
)(AdditionalFeatures);
