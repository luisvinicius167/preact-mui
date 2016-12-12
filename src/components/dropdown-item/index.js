/**
 * MUI Preact DropdownItem Module
 * @module preact/dropdown-item
 */

'use strict';

import {h, Component} from 'preact';

/**
 * @name DropdownItem
 */ 
export default class DropdownItem extends Component {
  render({ link, children, ...props}) {
		return (
			<li {...props}><a href={link ? link : false}>{children}</a></li>          
		)
  }
}
