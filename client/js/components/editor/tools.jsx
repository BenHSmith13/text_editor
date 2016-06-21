'use strict';

import React            from 'react';


export default class Tools extends React.Component{

  getStyles(){
    return {
      container: {
        position: 'relative',
        left: '-12px',
        backgroundColor: 'Ivory',
        display: this.props.hidden ? 'none' : 'block',
        marginTop: '0px',
        marginBottom: '10px',
        width: 'calc(100% + 24px)',
        fontSize: '.9em',
        paddingLeft: '3px'
      },
      inline:(tool) => {
        var inline = {
          display: 'inline-block',
          padding: '1px 7px',
          cursor: 'pointer',
          borderRadius: '3px'
        };
        var selected = {};
        if(tool == this.props.currentTool){
          selected.backgroundColor = lightGrey;
        }
        return {...inline, ...selected};
      },
      bold: {
        fontWeight: 'bold'
      },
      italic: {
        fontStyle: 'italic'
      },
      underline: {
        textDecoration: 'underline'
      },
      subscript: {
        verticalAlign: 'sub',
        fontSize: 'smaller'
      },
      superScript: {
        verticalAlign: 'super',
        fontSize: 'smaller'
      },
      custom: {
        position: 'absolute',
        right: '10px'
      }
    }
  };
  

  render(){
    const styles = this.getStyles();

    return <div style={styles.container}>
      <div>
        <div onClick={(e) => this.props.setBlockType(e, 'header-one')} style={styles.inline('header-one')}>H1</div>
        <div onClick={(e) => this.props.setBlockType(e, 'header-two')} style={styles.inline('header-two')}>H2</div>
        <div onClick={(e) => this.props.setBlockType(e, 'header-three')} style={styles.inline('header-three')}>H3</div>
        <div onClick={(e) => this.props.setBlockType(e, 'header-four')} style={styles.inline('header-four')}>H4</div>
        <div onClick={(e) => this.props.setBlockType(e, 'header-five')} style={styles.inline('header-five')}>H5</div>
        <div onClick={(e) => this.props.setBlockType(e, 'header-six')} style={styles.inline('header-six')}>H6</div>
        <div onClick={(e) => this.props.setBlockType(e, 'blockquote')} style={styles.inline('blockquote')}>Blockquote</div>
        <div onClick={(e) => this.props.setBlockType(e, 'blockquote')} style={styles.inline('blockquote')}>Blockquote</div>
        <div onClick={(e) => this.props.setBlockType(e, 'unordered-list-item')} style={styles.inline('unordered-list-item')}>UL</div>
        <div onClick={(e) => this.props.setBlockType(e, 'ordered-list-item')} style={styles.inline('ordered-list-item')}>OL</div>
        <div onClick={(e) => this.props.setBlockType(e, 'code-block')} style={styles.inline('code-block')}>Code Block</div>
      </div>
      <div>
        <div onClick={(e) => this.props.setTool(e, 'BOLD')} style={{...styles.inline('BOLD'), ...styles.bold}}>B</div>
        <div onClick={(e) => this.props.setTool(e, 'ITALIC')} style={{...styles.inline('ITALIC'), ...styles.italic}}>I</div>
        <div onClick={(e) => this.props.setTool(e, 'UNDERLINE')} style={{...styles.inline('UNDERLINE'), ...styles.underline}}>U</div>
        <div onClick={(e) => this.props.setTool(e, 'SUBSCRIPT')} style={styles.inline('SUBSCRIPT')}>A<span style={styles.subscript}>2</span></div>
        <div onClick={(e) => this.props.setTool(e, 'SUPERSCRIPT')} style={styles.inline('SUPERSCRIPT')}>A<span style={styles.superScript}>2</span></div>
        <div onClick={(e) => this.props.setTool(e, 'CUSTOM')} style={{...styles.inline('CUSTOM'), ...styles.custom}}>Add Custom</div>
      </div>
    </div>;
  }
}