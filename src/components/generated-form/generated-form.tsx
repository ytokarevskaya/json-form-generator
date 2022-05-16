import React from 'react'

import type {ConfigT} from '../../const/types'
import GeneratedFormControl from './generated-form-control'
import css from './generated-form.module.scss'

type GeneratedFormPropsT = {
	configuration: string
}

const GeneratedForm = ({configuration}: GeneratedFormPropsT) => {
	const configObj: ConfigT = configuration && JSON.parse(configuration)

	const {title, items, buttons} = configObj
	const isConfigEmpty = !title && !items && !buttons

	if (isConfigEmpty) {
		return (
			<p data-testid='emptyState'>
				JSON config is empty or invalid. Please fill config to create the form.
			</p>
		)
	}

	const handleFormSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault()
	}

	return (
		<div data-testid='formWrapper'>
			{title && <h2 className={css.formTitle} data-testid='formTitle'>{title}</h2>}
			<form className={css.form} onSubmit={handleFormSubmit}>
				{items?.length && (
					<div data-testid='formControls'>
						{items.map(control => {
							const {id, label} = control
							return (
								<div className={css.controlWrapper} key={id} data-testid='controlWrapper'>
									<label className={css.controlLabel} htmlFor={id}>{label}</label>
									<GeneratedFormControl {...control} />
								</div>
							)
						})}
					</div>
				)}
				{buttons?.length && (
					<div className={css.buttons} data-testid='formButtons'>
						{buttons.map(button => {
							const {id, label} = button
							return (
								<button
									key={id}
									className={css.button}
									data-testid='formButton'
								>
									{label}
								</button>
							)
						})}
					</div>
				)}
			</form>
		</div>
	)
}

GeneratedForm.displayName = 'GeneratedForm'
export default React.memo(GeneratedForm)
