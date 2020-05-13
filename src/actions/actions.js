//Set up actions

//Add features, remove added features
export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "UPDATE_TITLE";

export const addFeature = (newFeature) => {
    return {type: ADD_FEATURE, payload: newFeature};
}

export const removeFeature = (feature) => {
    return {type: REMOVE_FEATURE, payload: feature};
}


