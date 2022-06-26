import React from 'react'
import { Field } from 'redux-form'
import { required } from 'redux-form-validators'

import InputField from '../InputField'

const ScaleInput = ({ 
    id, 
    label,
    type = 'range',
    min = 0,
    max = 11,
  }) => {

    const normalize = value => value && parseFloat(value);

    return (
        <div className='form_field'>
          <label className='form-label'>{label}</label>
          <div>
            <Field 
              component={InputField}
              id={id}
              type={type}
              name={id}
              normalize={normalize}
              min={min}
              max={max}
              validate={[required()]}
            />
          </div>
        </div>
      )
}

export default ScaleInput;