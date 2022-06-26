import React from 'react'

const InputField = props => {
	const { meta = {} } = props
	const inputProps = {
		type: props.type || 'text',
		className: props.className,
		name: props.input.name,
		id: props.input.name,
		readOnly: props.readOnly,
		autoFocus: props.autoFocus,
		autoComplete: props.autoComplete,
		placeholder: props.placeholder,
		maxLength: props.maxLength,
		value: meta.uncontrolled ? undefined : props.input.value,
		defaultValue: meta.uncontrolled ? props.defaultValue : undefined,
		onChange: props.input.onChange,
		onKeyUp: props.onKeyUp,
		onBlur: props.onBlur,
		step: props.step || '',
		min: props.min || '',
	}

	return (
		<React.Fragment>
			<div name={`position-${props.input.name}`} className={`position-${props.input.name}`}>
				<input {...inputProps} {...props} onBlur={props.onBlurHandler} />
				{meta.touched && meta.error ? <div style={{ color: 'red' }}>{`This field  ${meta.error}`}</div> : null}
			</div>
		</React.Fragment>
	)
}

export default InputField;