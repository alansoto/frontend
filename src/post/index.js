import React, {Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react'

class Post extends Component{
  render(){
    const {id, title, body, author, category, voteScore, deleted, commentCount} = this.props;
    return(


      <Grid.Column>
        <Segment>
          <h2>{title}</h2>
          <p>{author}</p>
          <p> {commentCount} comments, {voteScore} stars</p>
          <button>Upvote</button> <button>Downvote</button> <button>Edit</button> <button>Delete</button>
        </Segment>
      </Grid.Column>
  );
  }
}

export default Post;
