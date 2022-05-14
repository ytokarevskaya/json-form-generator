import React, { ReactElement } from 'react'

import css from './header.module.scss'

const Header = (): ReactElement => {
	return (
		<header className={css.header} data-testid='header'>
			<h1 className={css.h1}>JSON Form Generator</h1>
		</header>
	)
}

Header.displayName = 'Header'
export default Header
