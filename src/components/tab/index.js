/**
 * MUI Preact Tab Module
 * @module preact/tab
 */

'use strict';

import {h, Component} from 'preact';

/**
 * @name Tab
 */ 
export default class Tab extends Component {
 render({value, label, ...props}) {
   return (
      <li {...props}>
        <a data-mui-toggle="tab" data-mui-controls={value}> {label} </a>
      </li>
   )
 }
}