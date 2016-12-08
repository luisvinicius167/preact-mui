/**
 * MUI Preact DropdownItem Module
 * @module preact/dropdown-item
 */

'use strict';

import {h, Component} from 'preact';

/**
 * @name DropdownItem
 */ 
class DropdownItem extends Component {
  render({ link, children }) {
		return (
			<li><a href={link ? link : false}>{children}</a></li>          
		)
  }
}

module.exports = DropdownItem;