import React from 'react'
import { Field } from 'redux-form'
import { required } from 'redux-form-validators'
import './index.css'

import InputField from '../InputField'

const DiameterField = ({ 
    id,
    label = 'Diameter',
    type = 'number',
  }) => {
    const normalize = value => value && parseFloat(value);

    return (
        <div className='form_field'>
            <label className="form-label">{label}</label>
            <Field 
                component={InputField}
                id={id}
                type={type}
                name={id}
                normalize={normalize}
                validate={required()}
            />
        </div>
    )
}

export default DiameterField;