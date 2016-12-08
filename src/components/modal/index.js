/**
 * MUI Preact Modal Module
 * @module preact/modal
 */

'use strict';

import {h, Component} from 'preact';

/**
 * @name Modal
 * @param {string} element The element id that will open the modal
 * when clicked
 * @param {function} onClose The function that will be called
 * when modal is closed 
 */ 
export default class Modal extends Component {
  state = {
    isActive: false
  }
  componentDidMount ( ) {
    if (this.props.element !== undefined) {
      let element = document.querySelector(`#${this.props.element}`)
      element.addEventListener('click', () => {
        this.toggleModal();
      })
    } 
  }
  toggleModal() {
    if (!this.state.isActive) {
      this.setState({isActive: !this.state.isActive})
      mui.overlay('on', this.base, { onclose: () => {
        this.setState({isActive: !this.state.isActive});
        this.props.onClose();
      }});
    }
  }

  render({children, ...props}, {isActive}){
    return (
      <div style={ModalPositions[this.props.position || 'center']} onClick={()=>{mui.overlay('off');}}>
        {isActive ? (<div {...props}>{children}</div>) : null}
      </div>
    )
  }
}

let ModalPositions = {
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height:'100%'
  },
  centerLeft: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height:'100%'
  },
  centerRight: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    height:'100%'
  },
  centerBottom: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '100%',
    height:'100%'
  },
    centerTop: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    height:'100%'
  }
}