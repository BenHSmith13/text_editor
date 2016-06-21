'use strict';

import React            from 'react';
import {Editor, EditorState, ContentState}                  from 'draft-js';
import {Entity,  RichUtils, SelectionState}                 from 'draft-js';
import {AtomicBlockUtils, Modifier, CompositeDecorator}     from 'draft-js';
import {convertToRaw, convertFromRaw}                       from 'draft-js';
import _                                                    from 'lodash';

export default class Editor extends React.Component{
  
  constructor(){
    super();
    this.state = {
      editorState: this.initEditorState(props),
      // currentTool: 'none',
      // tools: false,
      // hovered: false,
      // focused: false,
      // showUploader: false
    };
    this.onChange = (editorState) => {
      if(editorState){
        // props.update(props.target, convertToRaw(editorState.getCurrentContent()));
      }
      this.setState({editorState});
    };
  }

  static initEditorState(props, decorator){
    if (!props.text || (_.isObject(props.text) && _.isEmpty(props.text.toJSON()))) {
      return EditorState.createEmpty(decorator);
    } else if (_.isObject(props.text)) {
      return EditorState.createWithContent(convertFromRaw(props.text.toJSON()), decorator);
    } else {
      return EditorState.createWithContent(ContentState.createFromText(props.text), decorator);
    }
  }

  render(){

    return <div>
      <Editor
        editorState      = {this.state.editorState}
        blockRendererFn  = {this.blockRenderer}
        onChange         = {this.onChange}
        handleKeyCommand = {(c)=>this.handleKeyCommand(c)}
        placeholder      = {this.props.placeholder}
        onBlur           = {()=>this.setFocus(false)}
        ref              = 'editor'
        spellCheck
        stripPastedStyles
      />
    </div>
  }
  
}