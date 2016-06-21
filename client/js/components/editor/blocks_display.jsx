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
      title: this.props.title,
      author: this.props.author,
      data: JSON.stringify(this.props.raw)
    });
  }

  getStyle(){
    return {
      container: {
        position: 'fixed',
        width: '100%',
        left: '0px',
        top: this.state.visible ? '75vh' : '95vh',
        transition: 'all .3s ease'
      },
      icon: {
        fontSize: '3em',
        position: 'absolute',
        right: '18%',
        cursor: 'pointer'
      },
      blocks: {
        position: 'relative',
        left: '15%',
        backgroundColor: 'SlateGray',
        color: 'snow',
        width: '70%',
        marginTop: '75px',
        height: 'calc(25vh - 70px)',
        overflowY: 'scroll',
        padding: '15px',
        borderRadius: '7px',
        boxShadow: '0px 1px 1px 1px DimGray',
      },
      button: {
        position: 'absolute',
        left: '18%'
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