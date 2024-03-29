import React from 'react'
import type {ControlT, RadioButtonT} from '../../const/types'

import css from './generated-form.module.scss'

const GeneratedFormControl = ({id, type, placeholder, radioOptions}: ControlT) => {
	const renderRadioButtons = (radioOptions: Array<RadioButtonT> | undefined) => {
		return <div className={css.radioButtons} data-testid='radioButtons'>
			{(radioOptions || []).map(radio => {
				const {value, label} = radio
				return (
					<span key={value}>
						<input type='radio' id={value} name={id} value={value} data-testid='radioButton' />
						<label htmlFor={value}>{label}</label>
					</span>
				)
			})}
		</div>
	}

	switch (type) {
		case 'number':
			return <input id={id} type='number' placeholder={placeholder} data-testid='input' />
		case 'text':
			return <input id={id} type='text' placeholder={placeholder} data-testid='input' />
		case 'date':
			return <input id={id} type='date' data-testid='input' />
		case 'textarea':
			return <textarea id={id} placeholder={placeholder} data-testid='textarea' />
		case 'checkbox':
			return <input id={id} type='checkbox' data-testid='input' />
		case 'radio':
			return <>{renderRadioButtons(radioOptions)}</>
		default:
			return null
	}
}

GeneratedFormControl.displayName = 'GeneratedFormControl'
export default React.memo(GeneratedFormControl)
