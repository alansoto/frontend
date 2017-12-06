import React, {Component } from 'react';
import {connect} from 'react-redux';
import { Grid, Container } from 'semantic-ui-react'

import Post from '../post'

class PostList extends Component{
  render(){

    const { posts } = this.props;



    return(
    <Container>
      <Grid stackable columns={3}>
        {posts.map(post => (
          <Post key={post.id} id={post.id}  timestamp={post.timestamp}
            title={post.title} body={post.body} author={post.author} category={post.category}
            voteScore={post.voteScore} deleted={post.deleted} commentCount={post.commentCount}
          />
        ))}
      </Grid>
    </Container>
  );
  }

}

function mapStateToProps(posts){
  return {posts}
}

export default connect(mapStateToProps,)(PostList)
