/**
 * MUI Preact Tabs Module
 * @module preact/tabs
 */
'use strict';

import {h, Component, render} from 'preact';

let _tabComponentsChildren = []

function renderChildren(tab, index) {
  _tabComponentsChildren.push(render(tab[0]));

}

/**
 * @name Tabs
 */ 
export default class Tabs extends Component {
  componentDidMount () {
    // the initial Tab active index
    let initialTabActive = this.props.initialSelectedIndex || 0;
    this.props.children.forEach( tab => {
      // save all children of Tab Components in array
      renderChildren(tab.children);
    })

    //Tabs Component Children
    let tabsVNode = this.props.children;

    let VNodeChildrenArray = Array.from(this.base.children);
    VNodeChildrenArray[initialTabActive].classList.add('mui--is-active');
    
    tabsVNode.forEach( (tab, i) => {
      let div = document.createElement('div');
      div.classList.add('mui-tabs__pane');
      div.id = tab.attributes.value;
      if (i === initialTabActive ) {
        div.classList.add('mui--is-active');  
      }

      div.appendChild(_tabComponentsChildren[i]);

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