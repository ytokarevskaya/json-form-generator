import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import GeneratedForm from './generated-form'
import fullConfigMock from '../../const/sample-data.json'

const onlyTitleConfig = {
	title: 'Form Title',
}

const onlyControlsConfig = {
	items: [
		{
      id: 'text1',
      type: 'text',
      label: 'Text',
    }, {
      id: 'text2',
      type: 'text',
      label: 'Text',
    }, {
      id: 'text3',
      type: 'text',
      label: 'Text',
    },
	],
}

const onlyButtonsConfig = {
	buttons: [
		{
      id: 'button1',
      label: 'Button',
    },
		{
      id: 'button2',
      label: 'Button',
    }
	]
}

const invalidConfigMock = {
	a: 'abc',
}

test('renders tab content', () => {
  render(
		<GeneratedForm configuration={JSON.stringify(fullConfigMock)} />
	)
  const formWrapper = screen.getByTestId('formWrapper')
	expect(formWrapper).toBeInTheDocument()
})

test('renders all form elements', () => {
  render(
		<GeneratedForm configuration={JSON.stringify(fullConfigMock)} />
	)
  const formTitle = screen.getByTestId('formTitle')
	const formControls = screen.getByTestId('formControls')
	const formButtons = screen.getByTestId('formButtons')
	expect(formTitle).toBeInTheDocument()
	expect(formControls).toBeInTheDocument()
	expect(formButtons).toBeInTheDocument()
})

test('renders only title', () => {
  render(
		<GeneratedForm configuration={JSON.stringify(onlyTitleConfig)} />
	)
  const formTitle = screen.queryByTestId('formTitle')
	const formControls = screen.queryByTestId('formControls')
	const formButtons = screen.queryByTestId('formButtons')
	expect(formTitle).toBeInTheDocument()
	expect(formControls).toBeNull()
	expect(formButtons).toBeNull()
})

test('renders only controls with the right number of items', () => {
  render(
		<GeneratedForm configuration={JSON.stringify(onlyControlsConfig)} />
	)
  const formTitle = screen.queryByTestId('formTitle')
	const formControls = screen.queryByTestId('formControls')
	const formButtons = screen.queryByTestId('formButtons')
	const controlWrappers = screen.queryAllByTestId('controlWrapper')

	expect(formTitle).toBeNull()
	expect(formControls).toBeInTheDocument()
	expect(controlWrappers).toHaveLength(3)
	expect(formButtons).toBeNull()
})

test('renders only buttons with the right number of items', () => {
  render(
		<GeneratedForm configuration={JSON.stringify(onlyButtonsConfig)} />
	)
  const formTitle = screen.queryByTestId('formTitle')
	const formControls = screen.queryByTestId('formControls')
	const formButtons = screen.queryByTestId('formButtons')
	const buttons = screen.queryAllByTestId('formButton')

	expect(formTitle).toBeNull()
	expect(formControls).toBeNull()
	expect(formButtons).toBeInTheDocument()
	expect(buttons).toHaveLength(2)
})

test('renders empty state when there is no config', () => {
  render(
		<GeneratedForm configuration={''} />
	)
  const formTitle = screen.queryByTestId('formTitle')
	const formControls = screen.queryByTestId('formControls')
	const formButtons = screen.queryByTestId('formButtons')
	const emptyState = screen.queryByTestId('emptyState')

	expect(formTitle).toBeNull()
	expect(formControls).toBeNull()
	expect(formButtons).toBeNull()
	expect(emptyState).toBeInTheDocument()
})

test('renders empty state when config is invalid', () => {
  render(
		<GeneratedForm configuration={JSON.stringify(invalidConfigMock)} />
	)
  const formTitle = screen.queryByTestId('formTitle')
	const formControls = screen.queryByTestId('formControls')
	const formButtons = screen.queryByTestId('formButtons')
	const emptyState = screen.queryByTestId('emptyState')

	expect(formTitle).toBeNull()
	expect(formControls).toBeNull()
	expect(formButtons).toBeNull()
	expect(emptyState).toBeInTheDocument()
})
