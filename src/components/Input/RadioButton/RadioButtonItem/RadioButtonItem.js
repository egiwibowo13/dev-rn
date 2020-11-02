import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { noop } from '../../../../utils';
import { useThemeContext } from '../../../../utils/ThemeContext';
import { Text } from '../../../DataDisplay/Text';
import styles from './RadioButtonItem.styles';

export const RadioButtonItem = props => {
  const { title, onPress, disabled, customContainer, customText, selected, error } = props;

  const theme = useThemeContext();
  const circleStyle = [styles.circle, { borderColor: theme.colors.greyLight }];
  const innerCircleStyle = [styles.innerCircle, { backgroundColor: theme.colors.basePrimaryMain }];
  const textStyle = [styles.text, { color: theme.colors.fontPrimaryDark }];
  if (disabled) {
    circleStyle.push({ borderColor: theme.colors.eventInactive });
    innerCircleStyle.push({ backgroundColor: theme.colors.eventInactive });
    textStyle.push({ color: theme.colors.eventInactive });
  } else if (selected) {
    circleStyle.push({ borderColor: theme.colors.basePrimaryMain });
  } else if (error) {
    circleStyle.push({ borderColor: theme.colors.eventError });
  }


  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.mainContainer, customContainer]}
      testID={`rbi-${title}`}
      accessibilityLabel={`rbi-${title}`}
    >
      <View style={circleStyle}>{selected && <View style={innerCircleStyle} />}</View>
      <Text.Caption style={[textStyle, customText]}>{title}</Text.Caption>
    </TouchableOpacity>
  );
};

RadioButtonItem.propTypes = {
  disabled: PropTypes.bool,
  title: PropTypes.string,
  onPress: PropTypes.func,
  customContainer: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  customText: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  selected: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

RadioButtonItem.defaultProps = {
  disabled: false,
  customContainer: {},
  customText: {},
  title: '',
  onPress: noop,
  selected: false,
  error: false,
};
