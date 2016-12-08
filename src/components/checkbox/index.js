/**
 * MUI Preact Checkbox Module
 * @module preact/checkbox
 */

'use strict';

import {h,Component} from 'preact';

/**
 * @name Checkbox
 */ 
export default class Checkbox extends Component {
  render({name, defaultChecked=false, label, disabled, ...props}){
    return (
      <div class="mui-checkbox">
        <label>
          <input 
            {...props } 
            type="checkbox" 
            name={name}
            checked={defaultChecked}
            disabled={disabled ? 'disabled':null}
          />
          {label}
        </label>
      </div>
    )
  }
}