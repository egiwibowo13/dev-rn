import React, {createContext, useState} from 'react';
import PropTypes from 'prop-types';
import {colors as defaultColors, typography as defaultTypography} from './theme';

export const ThemeContext = createContext({
  colors: defaultColors,
  typography: defaultTypography,
  setColor: () => {},
  setTypography: () => {},
});

export const useThemeContext = () => {
  const themeContext = React.useContext(ThemeContext);
  if (themeContext === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return themeContext;
};

export const ThemeProvider = (props) => {
  // Initial values are obtained from the props
  const {colors: initialColor, children, typography: initailTypography} = props;

  // Use State to keep the values
  const [colors, setColors] = useState(initialColor);
  const [typography, setTypography] = useState(initailTypography);

  // Make the context object:
  const themeContext = {
    colors,
    typography,
    setColors,
    setTypography,
  };

  // pass the value in provider and return
  return (
    <ThemeContext.Provider value={themeContext}>
      {children}
    </ThemeContext.Provider>
  );
};

export const {ThemeConsumer} = ThemeContext;

ThemeProvider.propTypes = {
  colors: PropTypes.object,
  typography: PropTypes.object,
  children: PropTypes.element.isRequired,
};

ThemeProvider.defaultProps = {
  colors: {},
  typography: {},
};
