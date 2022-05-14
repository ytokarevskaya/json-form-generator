# JSON Form Generator

Simple form generator based on JSON

## How to use

1. Edit JSON config in the Config tab
2. Go to Result tab to see the form you've generated. Result is generated only if JSON config is valid.
3. Your progress is saved to `localStorage`

## Config structure

Property | Type | Description
--- | --- | ---
title | string | Form title
items | ControlT[] | Array of form controls
buttons | ButtonT[] | Array of form buttons


### ControlT data type

Property | Type | Required | Description
--- | --- | --- | ---
id | string | + | Control ID
type | enum | + | One of the following control types: `text`, `number`, `date`, `textarea`, `checkbox`, `radio`. Unknown types will be ignored
label | string | + | Control label
placeholder | string | - | Control placeholder. Ignored for `date`, `checkbox` and `radio`
radioOptions | RadioButtonT[] | - | Required only for `radio` type to set up radio options. Ignored by other control types


### ButtonT data type

Property | Type | Required | Description
--- | --- | --- | ---
id | string | + | Button ID
label | string | + | Button label



### RadioButtonT data type

Property | Type | Required | Description
--- | --- | --- | ---
value | string | + | Radio button value
label | string | + | Radio button label


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
