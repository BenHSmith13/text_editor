'use strict';

import React              from 'react';
import PostTag            from './post_tag.jsx';
import _                  from 'lodash';

export default class PostList extends React.Component{
  constructor(){
    super();
    
    this.state = {posts: null}
  }

  componentWillMount(){
    firebase.database().ref('posts').on('value', (snapshot) => {
      this.setState({posts: snapshot.val()})
    });
  }

  getStyle(){
    return{
      container: {
        position: 'relative',
        width: '800px',
        margin: 'auto',
        minHeight: '90vh',
        padding: '10px',
        marginTop: '20px',
        backgroundColor: '#F0E8D0', // ANTIQUE WHITE
      },
      button: {
        position: 'absolute',
        right: '-100px'
      }
    }
  }


  render(){
    const styles = this.getStyle();

    var display = _.map(this.state.posts, (post, key)=>{
      return <PostTag key={key} post={post} setPost={this.props.setPost}/>
    });
      
    return <div style={styles.container}>
      <button style={styles.button} className="btn btn-info" onClick={()=>this.props.setPost(true)}>New Post</button>
      {display}
    </div>
  }

}