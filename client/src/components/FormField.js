import React from 'react'

const FormField = props => {
  const titleCase = string => {
    return string.toLowerCase().split(' ').map(word => {
      return (word.charAt(0).toUpperCase() + word.slice(1))
    }).join(' ')
  }
  return (
    <div className='mb3'>
      <label className='db f6 mb2' htmlFor={props.htmlFor}>{props.label ? props.label : titleCase(`${props.name}`)}</label>
      <input type={props.type} name={props.name} placeholder={props.placeholder} onChange={props.onChange} className='b--black-20 br1 ba input-reset ph2 pv1 w-100' required />
    </div>
  )
}

export default FormField
