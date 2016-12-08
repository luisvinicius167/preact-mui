/**
 * MUI Preact Col Module
 * @module preact/col
 */
'use strict';

import {h, Component} from 'preact';

/**
 * @name Col
 */ 
class Col extends Component {
  render( {children, md, mdOffset, xs, xsOffset, ...props} ) {
    let colMdClass = md ? `mui-col-md-${md}` : ''
      , colXsClass = xs ? `mui-col-xs-${xs}` : ''
      , mdOffsetClass = mdOffset ? `mui-col-md-offset-${mdOffset}` : ''
      , xsOffsetClass = xsOffset ? `mui-col-xs-offset-${xsOffset}` : ''
      , className = `${colMdClass} ${colXsClass} ${mdOffsetClass} ${xsOffsetClass}`.trim();
    ;

    return (
      <div class={className} {...props}>
        {children}
      </div>
    )
  }
}

module.exports = Col;