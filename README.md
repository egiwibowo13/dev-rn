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
You just need to import `theme`, reassign the value you want to change and pass it to `ThemeProvider`. Example:  
Default primary color is blue but you like orange so you can simply do:

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
import { ThemeProvider } from 'react-native-design-system';
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
  - [x] [Button](src/components/Button/Button.js)
  - [ ] [CheckBox](src/)
  - [x] [Counter](src/components/Counter/Counter.js)
  - [ ] [Date / Time](src/)
  - [x] [FieldLabel](src/components/FieldLabel/FieldLabel.js)
  - [ ] [RadioButton](src/)
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
  - [ ] [Divider](src/)
  - [ ] [Icon](src/components/Icon/Icon.js)
  - [ ] [List](src/)
  - [ ] [Tooltip](src/)
  - [ ] [Typography / Text](src/components/Text/Text.js)


## Author

👤 **Egi Ari Wibowo**

* Github: [@egiwibowo13](https://github.com/egiwibowo13)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_