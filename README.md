<h1 align="center">Welcome to dev-rn 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/dev-rn" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/dev-rn.svg?color=blue">
  </a>
    <a href="https://www.npmjs.com/package/dev-rn">
    <img alt="downloads" src="https://img.shields.io/npm/dm/dev-rn.svg?color=blue" target="_blank" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
    <a href="https://github.com/iamshadmirza/react-native-design-system/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
</p>

> A reusabale component library

## Install

```sh
npm install dev-rn
```

This library needs `react-native-svg` & `react-native-svg-transformer` so go on and install that too. Check out Install guide [react-native-svg](https://github.com/react-native-svg/react-native-svg#installation), [react-native-svg-transformer](https://github.com/kristerkari/react-native-svg-transformer).


## Usage
Dev RN uses a centralized theme to provide consistency across all the components.

#### Step 1. Import ThemeProvider and theme then wrap your root component.
This step is important. We are passing `theme` as context value that each component will access.

```js
//your root component
import { ThemeProvider, theme } from 'dev-rn';

const App = () => {
  return (
    <ThemeProvider value={theme}>
      <Root />
    </ThemeProvider>
  );
}
```

#### Step 2. Use component.

```js
//inside any file
import { Button, Text } from 'dev-rn';

const MyScreen = () => {
  return (
    <>
    <Text.H1>Your Headline</Text.H1>
    <Text.Body1>Your Body</Text.Body1>
    <Button title="Press me" />
    </>
  );
}
```


### Customize

```js
//theme.config.js at root
const yourFontFamily = {
  fontPrimaryMedium: 'Ubuntu-Medium'
}

const yourTheme = {
  colors: {
    basePrimaryDark: '#B63792',
    basePrimaryMain: '#B31E72',
    basePrimaryLight: 'rgba(179, 30, 114, 0.07)',

    ...
  },
  typography: {
    h1: {
      fontSize: 24,
      fontFamily: yourFontFamily.fontPrimaryMedium,
      lineHeight: 36,
    },

    ...
  }
}

export default yourTheme;
```


```js
import { ThemeProvider } from 'dev-rn';
import yourTheme from './theme.config'

const App = () => {
  return (
    <ThemeProvider value={yourTheme}>
      <Root />
    </ThemeProvider>
  );
}
```

And we are done!
> You can see all the configurations available on the theme page.

## Run tests

```sh
npm run test
```

## Components included:

- Layout
  - [ ] [Container](src/)
  - [ ] [Grid](src/)
- Input
  - [x] [Button](src/components/Input/Button/Button.js)
  - [x] [CheckBox](src/)
  - [x] [Counter](src/components/Input/Counter/Counter.js)
  - [ ] [Date / Time](src/)
  - [x] [FieldLabel](src/components/Input/FieldLabel/FieldLabel.js)
  - [x] [RadioButton](src/)
  - [ ] [SearchBar](src/)
  - [ ] [Slider](src/)
  - [ ] [Switch](src/)
- Navigation
  - [ ] [Bottom Navigation](src/)
  - [ ] [Drawer](src/)
  - [ ] [Menu](src/)
  - [ ] [Stepper](src/)
  - [ ] [Tabs](src/)
- Surface
  - [ ] [App Bar](src/)
  - [ ] [Card](src/)
  - [ ] [Accordion](src/)
- Feedback
  - [ ] [Progress](src/)
  - [ ] [Dialog](src/)
  - [ ] [Snackbar](src/)
- Data Display
  - [ ] [Avatar](src/)
  - [ ] [Badge](src/)
  - [ ] [Chip](src/)
  - [x] [Divider](src/)
  - [x] [Icon](src/components/DataDisplay/Icon/Icon.js)
  - [ ] [List](src/)
  - [ ] [Tooltip](src/)
  - [x] [Typography / Text](src/components/DataDisplay/Text/Text.js)


## Author

👤 **Egi Ari Wibowo**

* Github: [@egiwibowo13](https://github.com/egiwibowo13)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_