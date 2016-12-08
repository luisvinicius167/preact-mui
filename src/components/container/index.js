/**
 * MUI Preact Container Module
 * @module preact/container
 */

'use strict';

import {h, Component} from 'preact';

/**
 * @name Container
 */ 
export default class Container extends Component {
  render({fluid, children, ...props}) {
    return (
      <div 
        class={
          fluid 
          ? `mui-container-fluid`
          : `mui-container`}
        {...props}>
        {children}
      </div>  
    )
  }
}