/**
 * MUI Preact Form module
 * @module preact/form
 */ 

'use strict';

import {h, Component} from 'preact';

/**
 * @name Form
 */ 
export default class Form extends Component {
  render({legend, children, inline, ...props}){
    return(
    <form 
      class={
        inline 
          ? 'mui-form--inline' 
          : null
        }
      {...props}
    >
    { legend ? (<legend>{legend}</legend>) : null }
    {children}
    </form>
    )
  }
}