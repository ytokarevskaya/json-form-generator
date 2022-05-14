import React, { ReactElement, useState } from 'react'
import useLocalStorage from '../../hooks/local-storage'
import {Tabs, Tab} from '../../components/tabs'
import Editor from '../../components/editor'
import GeneratedForm from '../../components/generated-form'
import sampleData from '../../const/sample-data.json'

import css from './main.module.scss'

const Main = (): ReactElement => {
	const [activeTab, setActiveTab] = useState(0)
	const [isConfigValid, setConfigValid] = useState(true)
	const [configuration, setConfiguration] = useLocalStorage('formGeneratorConfig', JSON.stringify(sampleData, null, 2))

	return (
		<main className={css.main} data-testid='main'>
			<Tabs activeTabIndex={activeTab} setActiveTabIndex={setActiveTab}>
				<Tab label='Config' data-testid='tab'>
					<Editor
						configuration={configuration}
						setConfiguration={setConfiguration}
						isConfigValid={isConfigValid}
						setConfigValid={setConfigValid}
					/>
				</Tab>
				<Tab label='Result' isDisabled={!isConfigValid} data-testid='tab'>
					<GeneratedForm configuration={configuration} />
				</Tab>
			</Tabs>
		</main>
	)
}

Main.displayName = 'Main'
export default Main
