/**
 * MUI Preact Tabs Module
 * @module preact/tabs
 */
'use strict';

import {h, Component} from 'preact';

/**
 * @name Tabs
 */ 
export default class Tabs extends Component {
 render({children, justified, initialSelectedIndex, ...props}) {
  let className = justified ? 'mui-tabs__bar mui-tabs__bar--justified' : 'mui-tabs__bar';
   return (
     <ul class={className} {...props}>
       {children}
     </ul>
   )
 }
}