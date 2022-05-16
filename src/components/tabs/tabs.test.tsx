import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import {Tabs} from './tabs'
import {Tab} from './tab'

test('renders right number of tabs', () => {
  render(
		<Tabs activeTabIndex={0} setActiveTabIndex={() => {}}>
			<Tab label='Tab 1' data-testid='tab'>foo</Tab>
			<Tab label='Tab 2' data-testid='tab'>bar</Tab>
		</Tabs>
	)
  const tabsContainer = screen.getByTestId('tabsContainer')
	const tabsContent = screen.getByTestId('tabsContent')
	const tabs = screen.getAllByTestId('tab')
	expect(tabsContainer).toBeInTheDocument()
	expect(tabsContent).toBeInTheDocument()
	expect(tabs).toHaveLength(2)
})

test('doesn\'t render content if no children provided', () => {
  render(
		<Tabs activeTabIndex={0} setActiveTabIndex={() => {}} />
	)
	const tabsContent = screen.queryByTestId('tabsContent')
	expect(tabsContent).toBeNull()
})
