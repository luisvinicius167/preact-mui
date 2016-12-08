/**
 * MUI Preact Radio Module
 * @module preact/radio
 */

'use strict';

import {h, Component} from 'preact';

/**
 * @name Radio
 */ 
class Radio extends Component {
  render({name, defaultChecked=false, label, disabled, ...props}){
    return (
    <div class="mui-radio">
      <label>
        <input 
          {...props } 
          type="radio" 
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

module.exports = Radio;