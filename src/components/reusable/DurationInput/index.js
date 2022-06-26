import React from 'react'
import { Field } from 'redux-form'
import { required } from 'redux-form-validators'

import InputField from '../InputField'

const DurationInput = ({ 
  id, 
  label, 
  type = 'time',
  step = 1 
}) => {
  return (
    <div className='form_field'>
        <label className='form-label'>{label}</label>
        <Field
            name={id}
            type={type}
            className='form-control'
            step={step}
            component={InputField}
            validate={[required()]}
        />
    </div>
  )
}

export default DurationInput
