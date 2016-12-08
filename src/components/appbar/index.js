/**
 * MUI Preact Appbar Module
 * @module preact/appbar
 */

'use scrict';

import { h, Component } from 'preact';

/** 
 * @name Appbar
 */ 
export default class Appbar extends Component {
	render({children, ...props}){
		return (
			<div class="mui-appbar" {...props}>
	  		{children}
			</div>
		)
	}
};
