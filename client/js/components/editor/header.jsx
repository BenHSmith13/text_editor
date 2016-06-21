'use strict';

import React            from 'react';

export default class Header extends React.Component{


  getStyles(){
    return{
      header: {
        position: 'relative',
        backgroundColor: '#5bc0de',
        width: '820px',
        top: '-12px',
        left: '-20px',
        padding: "5px 20px 20px",
        borderRadius: '10px'
      },
      title: {
        marginBottom: '20px'
      }
    }
  }

  render() {
    const styles = this.getStyles();

    return <div style={styles.header}>
      <h4>Title:</h4>
      <input style={styles.title} className="form-control" type="text" onChange={(e)=>this.props.updateTitle(e.target.value)} value={this.props.title}/>
      <h5>Author:</h5>
      <input className="form-control" type="text" onChange={(e)=>this.props.updateAuthor(e.target.value)} value={this.props.author}/>
    </div>
  }

}