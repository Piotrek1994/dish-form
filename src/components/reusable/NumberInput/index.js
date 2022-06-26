import React from 'react'
import { Field } from 'redux-form'
import { required } from 'redux-form-validators'

import InputField from '../InputField'


const NumberInput = ({
    id,
    label,
    type = 'number',
    placeholder = 0,
  }) => {
    const normalize = value => value && Number(value);
    return (
      <div className='form_field'>
        <label className='form-label' htmlFor={id}>{label}</label>
        <div>
          <Field 
            component={InputField}
            id={id}
            type={type}
            name={id}
            placeholder={placeholder}
            validate={[required()]}
            normalize={normalize}
          />
        </div>
      </div>
    )
}

export default NumberInput;