"use strict";

import React                    from 'react';
import assets                   from '../libs/assets';
import PostBuilder                   from './editor/post_builder.jsx';

class Home extends React.Component {

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
      <PostBuilder />
    </div>;
  }

}

export { Home as default };