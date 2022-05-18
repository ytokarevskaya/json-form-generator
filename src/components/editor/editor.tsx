import React, {useCallback} from 'react'
import clsx from 'clsx'
import MonacoEditor from '@monaco-editor/react'

import css from './editor.module.scss'

type EditorPropsT = {
	configuration: string
	isConfigValid: boolean
	setConfiguration: (value: string) => void
	setConfigValid: (value: boolean) => void
	showResultTab: VoidFunction
}

const Editor = ({
	configuration,
	isConfigValid,
	setConfiguration,
	setConfigValid,
	showResultTab,
}: EditorPropsT) => {
	const handleEditorChange = useCallback((value: string | undefined) => {
		setConfiguration(value || '')
	}, [setConfiguration])

	const handleEditorValidation = useCallback((markers: Array<any>) => {
		setConfigValid(!markers.length)
	}, [setConfigValid])

	const handleButtonClick = useCallback(() => {
		showResultTab()
	}, [showResultTab])

	return (
		<div className={css.wrapper} data-testid='editor'>
			<MonacoEditor
				height='50vh'
				defaultLanguage='json'
				defaultValue={configuration}
				onChange={handleEditorChange}
				onValidate={handleEditorValidation}
			/>
			<button
				className={clsx(css.button, {[css.disabled]: !isConfigValid})}
				onClick={handleButtonClick}
			>
				Apply
			</button>
			{!isConfigValid && (
				<div className={css.error} data-testid='editorError'>
					JSON is not valid. Please fix errors in editor to save the result.
				</div>
			)}
		</div>
	)
}

Editor.displayName = 'Editor'
export default React.memo(Editor)
