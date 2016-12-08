/**
 * MUI Preact Select Module
 * @module preact/select
 */

'use strict';

import {h, Component} from 'preact';

/**
 * @name Select
 */ 
export default class Select extends Component {
  render({style, children, label, defaultValue=false, disabled=false, ...props}){
    return (
      <div class="mui-select" style={style}>
        <select {...props} disabled={disabled} value={defaultValue}>
          {label ? (<label>{label}</label>):null}
          {children}
        </select>
      </div>

    )
  }
}