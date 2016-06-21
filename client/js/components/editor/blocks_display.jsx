'use strict';

import React            from 'react';

export default class BlocksDisplay extends React.Component{
  constructor(){
    super();
    this.state = {
      visible: false
    }
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
  }
    }
  }

  render(){
    const styles = this.getStyle();

    return <div style={styles.container}>
      <i className="glyphicon glyphicon-console" style={styles.icon} onClick={()=>this.setState({visible: !this.state.visible})}></i>
      <div style={styles.blocks}>
        {JSON.stringify(this.props.raw)}
      </div>
    </div>
  }
}