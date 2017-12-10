//external packages
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

//app stuff
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import postsReducer from './post-list/reducers';

//css
import 'semantic-ui-css/semantic.min.css';

const store = createStore(postsReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root')
);

registerServiceWorker();
