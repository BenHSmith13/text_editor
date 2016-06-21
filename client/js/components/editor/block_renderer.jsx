'use strict';

import React        from 'react';


export default (contentBlock)=>{
  const type = contentBlock.getType();
  if (type === 'blockquote') {
    return 'superFancyBlockquote';
  }
  // if (type === 'center') {
  //   return 'center';
  // }
  // if (type === 'left') {
  //   return 'left';
  // }
  // if (type === 'right') {
  //   return 'right';
  // }
  // if (type === 'justify') {
  //   return 'justify';
  // }
}