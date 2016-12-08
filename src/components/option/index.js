/**
 * MUI Preact Option Module
 * @module preact/option
 */

'use strict';

import {h, Component} from 'preact';

/**
 * @name Option
 */ 
class Option extends Component {
  render({label, value, ...props}){
    return(
      <option {...props} value={value}>
        {label}
      </option>
    )
  }
}

module.exports = Option;