import React, { ReactElement } from 'react'

import css from './footer.module.scss'

const Footer = (): ReactElement => {
	return (
		<footer className={css.footer} data-testid='footer'>Created by @ytokarevskaya 2022</footer>
	)
}

Footer.displayName = 'Footer'
export default Footer
