import React from 'react'
import { connect } from 'react-redux'
import { submit } from 'redux-form'

const SubmitButton = ({
  label,
  dispatch,
  type = 'button',
  formName = ''
}) => (
  <button
    type={type}
    onClick={() => dispatch(submit(formName))}
  >
    {label}
  </button>
)

export default connect()(SubmitButton)