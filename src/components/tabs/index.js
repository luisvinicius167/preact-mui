/**
 * MUI Preact Tabs Module
 * @module preact/tabs
 */
'use strict';


import {h, Component} from 'preact';
import render from 'preact-render-to-string';

let _tabComponentsChildren = []

function renderChildren(tab) {
  _tabComponentsChildren.push(render(tab[0]));
}

/**
 * @name Tabs
 */ 
export default class Tabs extends Component {
  componentDidUpdate(){
      let initialTabActive = this.props.initialSelectedIndex || 0;
      this.props.children.forEach(function (tab, i ){
        // save all children of Tab Components in array
        renderChildren(tab.children);
        let value = document.querySelector(`#${tab.attributes.value}`);
        value.innerHTML = _tabComponentsChildren[i];
      });

      //Tabs Component Children
      let tabsVNode = this.props.children;

      tabsVNode.forEach(function (tab, i) {
        let div = document.createElement('div');
        div.classList.add('mui-tabs__pane');
        div.setAttribute('data-is', 'tab-mui');
        div.id = tab.attributes.value;
        if (i === initialTabActive) {
          div.classList.add('mui--is-active');
        }

        div.innerHTML = _tabComponentsChildren[i];
      let tabsMUI = document.querySelector('[data-is="tabs-mui"]');
      tabsMUI.insertAdjacentElement('afterend', div);
      });
       _tabComponentsChildren = []
  }
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

      div.innerHTML =  _tabComponentsChildren[i];
      this.base.setAttribute('data-is', 'tabs-mui');
      let tabsMUI = document.querySelector('[data-is="tabs-mui"]');
      tabsMUI.insertAdjacentElement('afterend', div);
    });
    _tabComponentsChildren = []
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