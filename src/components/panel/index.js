/**
 * MUI Preact Panel Module
 * @module preact/panel
 */

'use strict';

import {h, Component} from 'preact';

/**
 * @name Panel
 */ 
export default class Panel extends Component {
 render({children, ...props}){
   return (
     <div class="mui-panel" {...props}>
       {children}
     </div>
   )
 }
}