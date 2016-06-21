'use strict';

import React          from 'react';

export default class PostTag extends React.Component{
  constructor(){
    super();
  }

  getStyles(){
    return{
      container: {
        width: '100%',
        backgroundColor: '#5bc0de',
        borderRadius: '7px',
        padding: '1px 10px',
        margin: '5px 0px',
        cursor: 'pointer'
      }
    }
  }

  render(){
    const styles = this.getStyles();

    return <div style={styles.container} onClick={()=>this.props.setPost(this.props.post)}>
      <h3>{this.props.post.title}</h3>
      <h4>{this.props.post.author}</h4>
    </div>
  }

}