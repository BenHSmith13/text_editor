'use strict';

import React              from 'react';
import PostTag            from './post_tag.jsx';
import _                  from 'lodash';

export default class PostList extends React.Component{
  constructor(){
    super();
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
      }
    }
  }

  render(){
    const styles = this.getStyle();

    var posts = firebase.database().ref('posts');
    console.log(posts);
    var display = _.map(posts, (post)=>{
      return <PostTag post={post}/>
    });
      
    return <div style={styles.container}>
      {display}
    </div>
  }

}