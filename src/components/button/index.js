/**
 * MUI Preact Button Module
 * @module preact/button
 */
'use strict';

import {h, Component} from 'preact';

/**
 * @name Button
 */ 

class Button extends Component {
  render({color, variant, children, disabled, size, ...props}) {
    let variantClass = variant ? `mui-btn--${variant}` : ''
      , colorClass = color ? `mui-btn--${color}` : ''
      , sizeClass = size ? `mui-btn--${size}` : ''
      , className = `mui-btn ${variantClass} ${colorClass} ${sizeClass}`.trim()
    ;
    return(
      <button
        class={className} 
        disabled={ disabled ? 'disabled':''}
        {...props}
        >
        {children}
      </button>
    )
  }
}

module.exports = Button;