/**
 * MUI Preact Tab Module
 * @module preact/tab
 */

'use strict';

import {h, Component, render} from 'preact';
/**
 * @name Tab
 */ 
export default class Tab extends Component {
  componentDidMount(){
      let div = document.createElement('div');
      div.classList.add('mui-tabs__pane');
      div.id = this.props.value;
      if ( this.props.selected === true ) {
        div.classList.add('mui--is-active');
      }
      div.appendChild(render(this.props.children[0]))
      this.base.parentElement.insertAdjacentElement('afterend', div);
  }
 render({value, selected, label, ...props}) {
   return (
      <li {...props} class={selected ? 'mui--is-active' : null}>
        <a data-mui-toggle="tab" data-mui-controls={value}> {label} </a>
      </li>
   )
 }
}