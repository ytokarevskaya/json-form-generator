export enum ControlTypeEnum {
	text,
	number,
	date,
	checkbox,
	textarea,
	radio
}

export type ControlType = keyof typeof ControlTypeEnum

export type ControlT = {
	id: string
	type: ControlType
	label: string
	placeholder?: string
	radioOptions?: Array<RadioButtonT>
}

export type RadioButtonT = {
	value: string
	label: string
}

export type ButtonT = {
	id: string
	label: string
}

export type ConfigT = {
	title?: string
	items: Array<ControlT>
	buttons: Array<ButtonT>
}
