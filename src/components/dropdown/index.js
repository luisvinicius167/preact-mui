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
class Dropdown extends Component {
  render({label, color, alignMenu, children}){
    return(
      <div class="mui-dropdown">
        <Button color={color} data-mui-toggle="dropdown">
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

module.exports = Dropdown;