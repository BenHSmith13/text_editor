"use strict";

import React                         from 'react';
import assets                        from '../libs/assets';
import PostBuilder                   from './editor/post_builder.jsx';
import PostList                      from './post_list/post_list.jsx';

class Home extends React.Component {
  constructor(){
    super();
    this.state = {
      post: null
    }
  }

  render(){

    const img = assets("./images/atomicjolt.jpg");

    const containerStyle = {
      position: 'absolute',
      width: '100vw',
      height: '100%',
      top: '0px',
      left: '0px',
      backgroundColor: '#4E7FB1' // Cornflour Blue
    };

    return <div style={containerStyle}>
      {this.state.post || true ? <PostBuilder /> : <PostList setPost={(p)=>this.setState({post: p})}/>}
    </div>;
  }

}

export { Home as default };