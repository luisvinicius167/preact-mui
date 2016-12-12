/**
 * MUI Preact Col Module
 * @module preact/col
 */
'use strict';

import {h, Component} from 'preact';

/**
 * @name Col
 */ 
export default class Col extends Component {
  render( {children, xs, xsOffset, sm, smOffset, md, mdOffset, lg, lgOffset, xl, xlOffset, ...props} ) {
    let colMdClass = md ? `mui-col-md-${md}` : ''
      , colXsClass = xs ? `mui-col-xs-${xs}` : ''
      , colSmClass = sm ? `mui-col-sm-${sm}` : ''
      , colLgClass = lg ? `mui-col-lg-${lg}` : ''
      , colXlClass = xl ? `mui-col-xs-${xl}` : ''
      , xsOffsetClass = xsOffset ? `mui-col-xs-offset-${xsOffset}` : ''
      , smOffsetClass = smOffset ? `mui-col-sm-offset-${smOffset}` : ''
      , mdOffsetClass = mdOffset ? `mui-col-md-offset-${mdOffset}` : ''
      , lgOffsetClass = lgOffset ? `mui-col-lg-offset-${lgOffset}` : ''
      , xlOffsetClass = xlOffset ? `mui-col-xl-offset-${xlOffset}` : ''
      , className = `${colXsClass} ${colSmClass} ${colMdClass} ${colLgClass} ${colXlClass} ${xsOffsetClass} ${smOffsetClass} ${mdOffsetClass} ${lgOffsetClass} ${xlOffsetClass}`.trim();
    ;

    return (
      <div class={className} {...props}>
        {children}
      </div>
    )
  }
}
