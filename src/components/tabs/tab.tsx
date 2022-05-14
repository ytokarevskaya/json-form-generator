import React from 'react'
import clsx from 'clsx'

import css from './tabs.module.scss'

export interface TabProps extends React.HTMLAttributes<HTMLButtonElement> {
	label: string
	isActive?: boolean
	isDisabled?: boolean
	children?: React.ReactNode
}

export const Tab = ({
	isActive,
	isDisabled,
	label,
	...rest
}: TabProps) => {
	return (
		<button
			{...rest}
			role='tab'
			className={clsx(css.tab, {
				[css.active]: isActive,
				[css.disabled]: isDisabled,
			})}
		>
			<div className={css.tabLabel}>
				{label}
			</div>
		</button>
	)
}

Tab.displayName = 'Tab'
