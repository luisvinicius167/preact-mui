/**
 * MUI Preact Dropdown Module
 * @module preact/dropdown
 */

'use strict';

import {h, Component} from 'preact';
import Button from '../button';

/**
 * @name Dropdown
 */ 
export default class Dropdown extends Component {
  render({label, color, size, variant, disabled, alignMenu, children, ...props}){
    return(
      <div class="mui-dropdown" {...props}>
        <Button 
          color={color} 
          size={size} 
          variant={variant} 
          data-mui-toggle="dropdown"
          disabled={disabled ? disabled : null}>
        {label}
        <span class="mui-caret"></span>
        </Button>
        <ul class={`mui-dropdown__menu ${alignMenu ? `mui-dropdown__menu--${alignMenu}` : false}`}>
          {children}
        </ul>  
      </div>        
    )
  }
}