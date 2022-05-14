import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders app', () => {
  render(<App />)
  const headerElement = screen.getByTestId('header')
	const footerElement = screen.getByTestId('footer')
	const mainElement = screen.getByTestId('main')

  expect(headerElement).toBeInTheDocument()
	expect(footerElement).toBeInTheDocument()
	expect(mainElement).toBeInTheDocument()
})
