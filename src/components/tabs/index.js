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
  componentDidMount () {
    let initialIndex = this.props.initialSelectedIndex || 0;
    //VNode Component Children
    let tabsVNode = this.props.children;
    let VNodeChildrenArray = Array.from(this.base.children);
    VNodeChildrenArray[initialIndex].classList.add('mui--is-active');
    
    tabsVNode.forEach( (tab, i) => {
      let div = document.createElement('div');
      div.classList.add('mui-tabs__pane');
      div.id = tab.attributes.value;
      if (i === initialIndex ) {
        div.classList.add('mui--is-active');  
      }
      div.textContent = tab.attributes.label;
      this.base.insertAdjacentElement('afterend', div);
    });
  }
 render({children, justified, initialSelectedIndex, ...props}) {
  let className = justified ? 'mui-tabs__bar mui-tabs__bar--justified' : 'mui-tabs__bar';
   return (
     <ul class={className} {...props}>
       {children}
     </ul>
   )
 }
}