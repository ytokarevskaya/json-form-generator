import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Editor from './editor'

test('renders editor', () => {
  render(
		<Editor configuration=''
			isConfigValid
			setConfigValid={() => {}}
			setConfiguration={() => {}}
			showResultTab={() => {}}
		/>)
  const editor = screen.getByTestId('editor')
	expect(editor).toBeInTheDocument()
})

test('renders editor and error message when config is invalid', () => {
  render(
		<Editor configuration=''
			isConfigValid={false}
			setConfigValid={() => {}}
			setConfiguration={() => {}}
			showResultTab={() => {}}
		/>
	)
	const editor = screen.getByTestId('editor')
	const errorMessage = screen.getByTestId('editorError')
	expect(editor).toBeInTheDocument()
	expect(errorMessage).toBeInTheDocument()
})
