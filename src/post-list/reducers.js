import {GET_POSTS} from './actions'

const initialPostState =   [
    {
        "id": "empty_state_id",
        "timestamp": 1467166872634,
        "title": "Please wait...",
        "body": "Please wait...",
        "author": "Please wait...",
        "category": "none",
        "voteScore": 0,
        "deleted": false,
        "commentCount": 0
    }
  ];

function postsReducer(state = initialPostState, action){
  switch (action.type) {
    case GET_POSTS:
      return state
    default:
      return state

  }
}

export default postsReducer;
