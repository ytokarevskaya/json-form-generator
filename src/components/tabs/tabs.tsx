import React from 'react'
import { Tab } from './tab'

import css from './tabs.module.scss'

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode
	activeTabIndex: number
	setActiveTabIndex: (index: number) => void
}

export const Tabs = ({
	children,
	activeTabIndex,
	setActiveTabIndex
}: TabsProps) => {
	const handleTabChange = (index: number) => {
		setActiveTabIndex(index)
	}

	const tabs = React.Children.map(children, (child, index) => {
		if (React.isValidElement(child)) {
			return (
				<Tab
					{...child.props}
					key={child.props.label}
					isActive={activeTabIndex === index}
					onClick={() => handleTabChange(index)}
				/>
			)
		}
		return null
	})

	const content = tabs?.length ? tabs[activeTabIndex].props.children : null

	return (
		<div className={css.tabsContainer}>
			<div className={css.tabs}>{tabs}</div>
			{content && <div className={css.content}>{content}</div>}
		</div>
	)
}

Tabs.displayName = 'Tabs'
