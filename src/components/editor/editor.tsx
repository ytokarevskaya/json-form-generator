import React from 'react'
import MonacoEditor from '@monaco-editor/react'

import css from './editor.module.scss'

type EditorPropsT = {
	configuration: string
	isConfigValid: boolean
	setConfiguration: (value: string) => void
	setConfigValid: (value: boolean) => void
}

const Editor = ({
	configuration,
	isConfigValid,
	setConfiguration,
	setConfigValid,
}: EditorPropsT) => {
	const handleEditorChange = (value: string | undefined) => {
		setConfiguration(value || '')
	}

	const handleEditorValidation = (markers: Array<any>) => {
		setConfigValid(!markers.length)
	}

	return (
		<div className={css.wrapper} data-testid='editor'>
			<MonacoEditor
				height='50vh'
				defaultLanguage='json'
				defaultValue={configuration}
				onChange={handleEditorChange}
				onValidate={handleEditorValidation}
			/>
			{!isConfigValid && (
				<div className={css.error} data-testid='editorError'>JSON is not valid. Please fix errors in editor to see the result.</div>
			)}
		</div>
	)
}

Editor.displayName = 'Editor'
export default Editor
