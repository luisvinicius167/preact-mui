/**
 * MUI Preact Option Module
 * @module preact/option
 */

'use strict';

import {h, Component} from 'preact';

/**
 * @name Option
 */ 
export default class Option extends Component {
  render({label, value, ...props}){
    return(
      <option {...props} value={value}>
        {label}
      </option>
    )
  }
}