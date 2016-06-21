'use strict';

import React            from 'react';

export default class BlocksDisplay extends React.Component{
  constructor(){
    super();
    this.state = {
      visible: false
    }
  }

  publish(){
    firebase.database().ref('posts').push({
      title: this.props.title || 'No Title',
      author: this.props.author || 'Unknown',
      data: JSON.stringify(this.props.raw)
    });
  }

  getStyle(){
    return {
      container: {
        position: 'fixed',
        width: '100%',
        left: '0px',
        top: this.state.visible ? '75vh' : '92vh',
        transition: 'all .3s ease',
      },
      icon: {
        fontSize: '3em',
        position: 'absolute',
        left: '18%',
        cursor: 'pointer',
        zIndex: '2',
        marginTop: '5px'
      },
      blocks: {
        position: 'relative',
        left: '15%',
        backgroundColor: 'SlateGray',
        color: 'snow',
        width: '70%',
        // marginTop: '75px',
        height: '26vh',
        overflowY: 'scroll',
        padding: '85px 15px 15px',
        borderRadius: '7px',
        boxShadow: '0px 1px 1px 1px DimGray',
      },
      button: {
        marginTop: '10px',
        position: 'absolute',
        right: '18%',
        zIndex: '2'
      }
    }
  }

  render(){
    const styles = this.getStyle();

    return <div style={styles.container}>
      <button className="btn btn-info" onClick={()=>this.publish()} style={styles.button}>Publish</button>
      <i className="glyphicon glyphicon-console" style={styles.icon} onClick={()=>this.setState({visible: !this.state.visible})}></i>
      <div style={styles.blocks}>
        {JSON.stringify(this.props.raw)}
      </div>
    </div>
  }
}