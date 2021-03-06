'use strict';

import React            from 'react';
import {Editor, EditorState, ContentState}                  from 'draft-js';
import {Entity,  RichUtils, SelectionState}                 from 'draft-js';
import {AtomicBlockUtils, Modifier, CompositeDecorator}     from 'draft-js';
import {convertToRaw, convertFromRaw}                       from 'draft-js';
import _                                                    from 'lodash';

import Tools                                                from './tools.jsx';
import StyleMap                                             from './style_map.jsx';
import BlocksDisplay                                        from './blocks_display.jsx';
import BlockRenderer                                        from './block_renderer.jsx';
import Header                                               from './header.jsx';

export default class PostBuilder extends React.Component{
  
  constructor(props){
    super(props);

    this.compositeDecorator = new CompositeDecorator([
      {
        strategy: this.benStrategy,
        component: this.benComponent
      }
    ]);

    this.state = {
      editorState: this.initEditorState(props, this.compositeDecorator),
      title: props.post ? props.post.title : null,
      author: props.post ? props.post.author : null,
    };
    this.onChange = (editorState) => {
      this.setState({editorState});
    };
  }

  // componentWillMount(){
  //   this.setState({
  //     title: this.props.post ? this.props.post.title : null,
  //     author: this.props.post ? this.props.post.author : null,
  //   });
  // }

  /**
   * Initializes the Editor state depending on the initial data
   * @param decorator, your CompositeDecorator
   * @param props
   * @returns {*}, a draft Editor State
   */
  initEditorState(props, decorator) {
    let text = props.post && props.post.data ? JSON.parse(props.post.data) : null;
    if (!text) {
      return EditorState.createEmpty(decorator);
    } else {
      return EditorState.createWithContent(convertFromRaw(text), decorator);
    }
  }


  /**
   * Allows styling through key commands, the following commands work:
   * 'cmd+b', 'cmd+i', 'cmd+u'
   * @param {string} command, the command that gets passed: bold, italic, underline
   * @returns {boolean}, true if the state changes
   */
  handleKeyCommand(command){
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  benStrategy(contentBlock, callback) {
    let regex = /Ben/g;
    const text = contentBlock.getText();
    let matchArr, start;
    while ((matchArr = regex.exec(text)) !== null) {
      start = matchArr.index;
      callback(start, start + matchArr[0].length);
    }
  }

  benComponent = (props) => {
    const style = {
      color: 'green',
      backgroundColor: 'black',
      padding: '2px'
    };

    return <span {...props} style={style}>{props.children}</span>;
  };

  /**
   * Sets the inline style of a selection, handled params are:
   * 'BOLD', 'ITALIC', 'UNDERLINE', 'SUBSCRIPT', 'SUPERSCRIPT'
   * @param e
   * @param {string} tool, selection style key
   */
  setTool(e, tool){
    e.stopPropagation();
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, tool));
  }

  setBlockType(e, blockType){
    e.stopPropagation();
    this.onChange( RichUtils.toggleBlockType(this.state.editorState, blockType) );
  }


  getStyles(){
    return {
      container: {
        position: 'relative',
        width: '800px',
        margin: 'auto',
        minHeight: '91vh',
        padding: '10px',
        marginTop: '20px',
        backgroundColor: '#F0E8D0', // ANTIQUE WHITE
      },
      back: {
        position: 'absolute',
        fontSize: '3.5em',
        top: '10px',
        left: '-18%',
        cursor: 'pointer'
      }
    }
  }

  render(){
    const styles = this.getStyles();

    //TODO: block rapper to set focus on editor
    return <div style={styles.container}>
      <i className="glyphicon glyphicon-menu-left" style={styles.back} onClick={()=>this.props.back()}></i>
      <Header
        updateTitle={(t)=>this.setState({title: t})}
        updateAuthor={(a)=>this.setState({author: a})}
        title = {this.state.title}
        author = {this.state.author}
      />
      <Tools setTool={(e, t)=>this.setTool(e, t)} setBlockType={(e, t)=>this.setBlockType(e, t)}/>
      <Editor
        editorState      = {this.state.editorState}
        blockRendererFn  = {BlockRenderer}
        customStyleMap   = {StyleMap}
        onChange         = {this.onChange}
        handleKeyCommand = {(c)=>this.handleKeyCommand(c)}
        placeholder      = {this.props.placeholder}
        ref              = 'editor'
        spellCheck
        stripPastedStyles
      />
      <BlocksDisplay
        title={this.state.title}
        author={this.state.author}
        raw={convertToRaw(this.state.editorState.getCurrentContent())}
      />
    </div>
  }
  
}