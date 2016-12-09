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
 render({children, value, active, label, ...props}) {
   let activeClass = 'mui--is-active';
   return (
      <li {...props}>
        <a data-mui-toggle="tab" data-mui-controls={value}> {children} </a>
      </li>
   )
 }
}