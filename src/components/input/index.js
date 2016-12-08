/**
 * MUI Preact Input Module
 * @module preact/input
 */

'use strict';

import { h, Component } from 'preact';

/**
 * @name Input
 */
class Input extends Component {
  render({style, hint, label, type='text', required, defaultValue, floatingLabel, ...props}){
    let floatingLabelClass = floatingLabel ? ' mui-textfield--float-label' : '';
    let className = `mui-textfield ${floatingLabelClass}`.trim();
    return(
    <div 
      class={className}
      style={ style ? style : null}
      >
      <input 
        type={type} 
        placeholder={hint}
        value={defaultValue ? defaultValue : null}
        required={required ? required : null}
        {...props}
      />
      { label 
        ? (<label>{label}</label>) 
        : null 
      }
    </div>
    )
  }
} 

module.exports = Input;