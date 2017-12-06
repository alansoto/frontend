import React, { Component } from 'react';
import PostList from './post-list'

class App extends Component {
  render() {
    const style = {
      mainContainer:{
        marginTop:'3em'
      }
    }

    return (
      <div style={style.mainContainer}>
        <PostList />
      </div>
    );
  }
}

export default App;
