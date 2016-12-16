  /**
   * MUI Preact Tab Module
   * @module preact/tab
   */

  'use strict';

  import {h, Component} from 'preact';
  import {render as renderer} from 'preact';
  
  function renderTabMuiChildren(props){
    let div = document.createElement('div');
        div.classList.add('mui-tabs__pane');
        div.id = props.value;
        if ( props.selected === true ) {
          div.classList.add('mui--is-active');
        }
        div.appendChild(renderer(props.children[0]))
        return div;
  }
  /**
   * @name Tab
   */ 
  export default class Tab extends Component {
    componentDidUpdate(){
        let div = renderTabMuiChildren(this.props);
        this.base.parentElement.insertAdjacentElement('afterend', div);
    }    
    componentDidMount(){
        let div = renderTabMuiChildren(this.props);
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