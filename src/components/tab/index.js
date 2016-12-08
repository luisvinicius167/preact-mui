/**
 * MUI Preact Tab Module
 * @module preact/tab
 */

'use strict';

import {h, Component} from 'preact';

/**
 * @name Tab
 */ 
class Tab extends Component {
 render({children, value, active, label, ...props}) {
   let activeClass = 'mui--is-active';
   return (
      <li {...props}>
        <a data-mui-toggle="tab" data-mui-controls={value}> {label} </a>
      </li>
   )
 }
}

module.exports = Tab;