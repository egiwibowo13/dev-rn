import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { Text } from '../../DataDisplay/Text';
import { noop, getTestID } from '../../../utils';
import { useThemeContext } from '../../../utils/ThemeContext';
import IcChecked from '../../../assets/svgs/ic_checked.svg';
import styles from './CheckBox.styles';

export const CheckBox = props => {
  const { label, onPress, disabled, containerStyle, checked } = props;

  const theme = useThemeContext();

  let boxStyle = checked ? { borderColor: theme.colors.basePrimaryMain } : { borderColor: theme.colors.eventInactive };
  let textStyle = { color: theme.colors.fontPrimaryDark };
  if (disabled) {
    boxStyle = {
      borderColor: theme.colors.eventInactive,
      backgroundColor: theme.colors.eventInactive,
    };
    textStyle = { color: theme.colors.eventInactive, marginLeft: 8 };
  }
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.mainContainer, containerStyle]}
      {...getTestID(label)}
    >
      <View style={[styles.box, boxStyle]}>{checked && <IcChecked color={theme.colors.basePrimaryMain} />}</View>
      <Text.Body1 style={[styles.text, textStyle]}>{label}</Text.Body1>
    </TouchableOpacity>
  );
};

CheckBox.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onPress: PropTypes.func,
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  checked: PropTypes.bool,
  readOnly: PropTypes.bool,
};

CheckBox.defaultProps = {
  disabled: false,
  containerStyle: {},
  label: 'default',
  onPress: noop,
  checked: false,
  readOnly: false,
};
