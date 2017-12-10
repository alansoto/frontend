//external packages
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';


//app stuff
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import postsReducer from './post-list/reducers';

import {getPosts} from './api';

//css
import 'semantic-ui-css/semantic.min.css';

const store = createStore(postsReducer,  applyMiddleware(thunk))

getPosts().then(something => console.log(something));


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root')
);

registerServiceWorker();
