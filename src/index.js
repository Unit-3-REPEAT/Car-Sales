import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bulma/css/bulma.css';
import './styles.scss';

//STEP 2 import reducer, import provider and createStore functions
import { reducer } from './reducers/reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

//Create Redux store
const store = createStore(reducer);




const rootElement = document.getElementById('root');
ReactDOM.render(
    //Wrap App in a Provider and pass in store={store}
        <Provider store={store}>
            <App />
        </Provider>,
     rootElement);
