import React from 'react';
import {Text as TextLib, TextPropTypes} from 'react-native';
import {useThemeContext} from '../../utils/ThemeContext';
import {getTestID} from '../../utils';

export const H1 = ({children, style, testID, ...props}) => {
  const context = useThemeContext();
  return <TextLib style={[context.typography.h1, style]} {...props} {...getTestID(testID)}>{children}</TextLib>;
};

export const H2 = ({children, style, testID, ...props}) => {
  const context = useThemeContext();
  return <TextLib style={[context.typography.h2, style]} {...props} {...getTestID(testID)}>{children}</TextLib>;
};

export const Subtitle1 = ({children, style, testID, ...props}) => {
  const context = useThemeContext();
  return <TextLib style={[context.typography.subtitle1, style]} {...props} {...getTestID(testID)}>{children}</TextLib>;
};

export const Subtitle2 = ({children, style, testID, ...props}) => {
  const context = useThemeContext();
  return <TextLib style={[context.typography.subtitle2, style]} {...props} {...getTestID(testID)}>{children}</TextLib>;
};

export const Body1 = ({children, style, testID, ...props}) => {
  const context = useThemeContext();
  return <TextLib style={[context.typography.body1, style]} {...props} {...getTestID(testID)}>{children}</TextLib>;
};

export const Body2 = ({children, style, testID, ...props}) => {
  const context = useThemeContext();
  return <TextLib style={[context.typography.body2, style]} {...props} {...getTestID(testID)}>{children}</TextLib>;
};

export const Caption = ({children, style, testID, ...props}) => {
  const context = useThemeContext();
  return <TextLib style={[context.typography.caption, style]} {...props} {...getTestID(testID)}>{children}</TextLib>;
};

export const Overline1 = ({children, style, testID, ...props}) => {
  const context = useThemeContext();
  return <TextLib style={[context.typography.overline1, style]} {...props} {...getTestID(testID)}>{children}</TextLib>;
};

export const Overline2 = ({children, style, testID, ...props}) => {
  const context = useThemeContext();
  return <TextLib style={[context.typography.overline2, style]} {...props} {...getTestID(testID)}>{children}</TextLib>;
};

export const Button1 = ({children, style, testID, ...props}) => {
  const context = useThemeContext();
  return <TextLib style={[context.typography.button1, style]} {...props} {...getTestID(testID)}>{children}</TextLib>;
};

export const Button2 = ({children, style, testID, ...props}) => {
  const context = useThemeContext();
  return <TextLib style={[context.typography.button2, style]} {...props} {...getTestID(testID)}>{children}</TextLib>;
};

export const Text = {
  H1,
  H2,
  Subtitle1,
  Subtitle2,
  Body1,
  Body2,
  Caption,
  Overline1,
  Overline2,
  Button1,
  Button2,
};

H1.propTypes = TextPropTypes;
H2.propTypes = TextPropTypes;
Subtitle1.propTypes = TextPropTypes;
Subtitle2.propTypes = TextPropTypes;
Body1.propTypes = TextPropTypes;
Body2.propTypes = TextPropTypes;
Caption.propTypes = TextPropTypes;
Overline1.propTypes = TextPropTypes;
Overline2.propTypes = TextPropTypes;
Button1.propTypes = TextPropTypes;
Button2.propTypes = TextPropTypes;
