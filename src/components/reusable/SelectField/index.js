import React from 'react'
import { Field } from 'redux-form'
import { required } from 'redux-form-validators'

import ScaleInput from '../ScaleInput'
import DiameterInput from '../DiameterInput'
import NumberInput from '../NumberInput'

const renderOptions = (options) => {
    return options.map((option) => {
      const { type } = option;
      return <option value={type}>{type}</option>
    }) 
}

const FIELDS_BY_TYPE = {
  soup: [
    <ScaleInput 
      id={'spiciness_scale'}
      label={'Spiciness scale'}
    />
  ],
  sandwich: [
    <NumberInput 
      id={'slices_of_bread'}
      label={'Slices of bread'}
    />
  ],
  pizza: [
    <DiameterInput 
      id={'diameter'}
      label={'Diameter'}
    />, 
    <NumberInput 
      id={'no_of_slices'}
      label={'Number of slices'}
    />
  ],
}

const SelectField = ({
    selectedType,
    label, 
    id, 
    options = []
}) => {
  return (
    <div className='form_field type_form'>
      <label 
        className='form-label' 
        htmlFor='type'
      >
        {label}
      </label>
      <Field name={id} component="select" validate={[required()]}>
        <option />
        {renderOptions(options)}
      </Field>

      {
        !!selectedType && FIELDS_BY_TYPE[selectedType].map(element => element)
      }
    </div>
  )
}

export default SelectField