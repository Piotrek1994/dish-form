import React from 'react'
import { connect } from 'react-redux'
import { Form, reduxForm, formValueSelector } from 'redux-form'

import submit from '../../utils/submitForm'

import TextField from '../reusable/TextField'
import SubmitButton from '../reusable/SubmitButton'
import SelectField from '../reusable/SelectField'
import DurationInput from '../reusable/DurationInput'
import './index.css'

let DynamicForm = ({
	title,
	type,
}) => {
	const typeList = [
		{type: 'pizza'},
		{type: 'soup'},
		{type: 'sandwich'},
	]
	return (
		<>
			<div className='card'>
				<div className='card-body'>
					<Form>
						<h3>{title}</h3>
						<br />

						<TextField 
							label={'Dish name'}
							id={`name`}
						/>

						<DurationInput 
							label='Preparation Time'
							id='preparation_time'
						/>

						<SelectField
						
							label='Type' 
							id='type' 
							selectedType={type}
							options={typeList}
						/>

						<SubmitButton
							label={'Submit form'}
  							formName={'dishForm'}
						/>
					</Form>
				</div>
			</div>
		</>
	)
}

DynamicForm = reduxForm({
	form: 'dishForm',
	onSubmit: submit
})(DynamicForm)

const selector = formValueSelector('dishForm')
DynamicForm = connect(state => {
	const name = selector(state, 'name')
	const type = selector(state, 'type')
	const no_of_slices = selector(state, 'no_of_slices')
	const preparation_time = selector(state, 'preparation_time')
	const diameter = selector(state, 'diameter')

	return {
		name,
		type,
		no_of_slices,
		preparation_time,
		diameter,
	}
})(DynamicForm)

export default DynamicForm
