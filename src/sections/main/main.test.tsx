import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Main from './main'

test('renders 2 tabs', () => {
  render(<Main />)
  const tabs = screen.getAllByTestId('tab')
	expect(tabs).toHaveLength(2)
})
