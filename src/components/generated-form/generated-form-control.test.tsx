import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import GeneratedFormControl from './generated-form-control'
import type {ControlType} from '../../const/types'

const textInput = {
	id: 'text',
	type: 'text' as ControlType,
	label: 'Text',
}

const numberInput = {
	id: 'number',
	type: 'number' as ControlType,
	label: 'Number',
}

const dateInput = {
	id: 'date',
	type: 'date' as ControlType,
	label: 'Date',
}

const checkboxInput = {
	id: 'check',
	type: 'checkbox' as ControlType,
	label: 'Check',
}

const textareaInput = {
	id: 'textarea',
	type: 'textarea' as ControlType,
	label: 'Textarea',
}

const radioInput = {
	id: 'radio',
	type: 'radio' as ControlType,
	label: 'Radio',
	radioOptions: [
		{
			label: 'Option 1',
			value: 'opt1'
		},
		{
			label: 'Option 2',
			value: 'opt 2'
		},
	],
}

const invalidInput = {
	id: 'foo',
	type: 'bar' as ControlType,
	label: 'Invalid',
}

test('renders text input', () => {
  render(
		<GeneratedFormControl {...textInput} />
	)
  const input = screen.queryByTestId('input')
	expect(input).toBeInTheDocument()
	expect(input).toHaveAttribute('type', 'text')
})

test('renders number input', () => {
  render(
		<GeneratedFormControl {...numberInput} />
	)
  const input = screen.queryByTestId('input')
	expect(input).toBeInTheDocument()
	expect(input).toHaveAttribute('type', 'number')
})

test('renders date input', () => {
  render(
		<GeneratedFormControl {...dateInput} />
	)
  const input = screen.queryByTestId('input')
	expect(input).toBeInTheDocument()
	expect(input).toHaveAttribute('type', 'date')
})

test('renders checkbox input', () => {
  render(
		<GeneratedFormControl {...checkboxInput} />
	)
  const input = screen.queryByTestId('input')
	expect(input).toBeInTheDocument()
	expect(input).toHaveAttribute('type', 'checkbox')
})

test('renders textarea', () => {
  render(
		<GeneratedFormControl {...textareaInput} />
	)
  const textarea = screen.queryByTestId('textarea')
	expect(textarea).toBeInTheDocument()
})

test('renders radiobuttons with the right number of items', () => {
  render(
		<GeneratedFormControl {...radioInput} />
	)
  const radioButtonsWrapper = screen.queryByTestId('radioButtons')
	const radioButton = screen.queryAllByTestId('radioButton')
	expect(radioButtonsWrapper).toBeInTheDocument()
	expect(radioButton).toHaveLength(2)
})

test('returns null when control type is invalid', () => {
  render(
		<GeneratedFormControl {...invalidInput} />
	)
	const input = screen.queryByTestId('input')
	const textarea = screen.queryByTestId('textarea')
  const radioButtonsWrapper = screen.queryByTestId('radioButtons')
	expect(input).toBeNull()
	expect(textarea).toBeNull()
	expect(radioButtonsWrapper).toBeNull()
})
