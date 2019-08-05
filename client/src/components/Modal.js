import React, { Component } from 'react'

class Modal extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className='bg-black-50 fixed flex flex-column items-center justify-center min-vh-100 w-100 z-1'>
        <div className='bg-white black br4 pt4 shadow-5 tc'>
          <p className='ph4 pb3'>{this.props.message}</p>
          <button className='b--black-10 bg-transparent dt justify-center items-center ph5 pv3 pointer w-100' onClick={this.props.dismissModal}>OK</button>
        </div>
      </div>
    )
  }
}

export default Modal
