/**
 * MUI Preact Textarea Module
 * @module preact/textarea
 */

'use strict';

import { h, Component } from 'preact';

/**
 * @name Textarea
 */
export default class Textarea extends Component {
  render({style, hint, label, required, defaultValue, floatingLabel, ...props}){
    let floatingLabelClass = floatingLabel ? ' mui-textfield--float-label' : '';
    let className = `mui-textfield ${floatingLabelClass}`.trim();
    return(
    <div 
      class={className}
      style={ style ? style : null}
      >
      <textarea 
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