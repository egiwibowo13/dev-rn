import React from 'react';
import {TouchableOpacity, View, TextInput, Platform} from 'react-native';
import PropTypes from 'prop-types';
import { getTestID, noop } from '../../../utils';
import { Text } from '../../DataDisplay/Text';
import FieldLabelStyle from './FieldLabel.styles';

/**
 *
 * @param {{
 *    label: string,
 *    subLabel: string,
 *    placeholder: string,
 *    required: boolean,
 *    bind: Object,
 *    error: string,
 *    leftIcon: Element,
 *    rightIcon: Element,
 *    prefix: string,
 *    suffix: string,
 *    type: 'outlined' | 'ghost',
 *    state: 'disabled' | 'active'
 * }} props
 */
export const FieldLabel = (props) => {
  const {
    label,
    subLabel,
    placeholder,
    required,
    bind,
    error,
    leftIcon,
    rightIcon,
    prefix,
    suffix,
    type,
    state,
    onPressIcon,
    style,
    textInputStyle,
    labelStyle,
    errorStyle
  } = props;

  const styles = FieldLabelStyle({type});

  const isEditable = state === 'active';

  const LabelText = () => {
    return (
      <Text.Body1 style={labelStyle}>
        {label}
        {!!subLabel && <Text.Overline1>{subLabel}</Text.Overline1>}{' '}
        {required && <Text.Overline1 style={styles.required}>*</Text.Overline1>}
      </Text.Body1>
    );
  };

  const ErrorText = () => {
    return <Text.Caption style={[styles.textError, errorStyle]} {...getTestID(`fl-err-${label}`)}>{error}</Text.Caption>;
  };

  const IconWrapper = ({icon: Icon, onPress, testID}) => {
    if (Icon === null) {
      return <View style={{width: 8}} />;
    }
    return (
      <TouchableOpacity {...getTestID(testID)} style={styles.iconWrapper} disabled={onPress === noop} onPress={onPress}>
        <Icon color={styles.iconColor} width={16} height={16} />
      </TouchableOpacity>
    );
  };

  const TextExt = ({text}) => {
    return (
      <View style={styles.textExtWrapper}>
        <Text.Body1 style={styles.textExt}>{text}</Text.Body1>
      </View>
    );
  };

  const showPrefix = prefix !== null;
  const showSuffix = suffix !== null;

  return (
    <React.Fragment>
      {!!label && <LabelText />}
      <View
        style={[
          isEditable ? styles.containerStyle : styles.disabledContainerStyle,
          error && isEditable ? styles.errContainerStyle : {},
          style
        ]}>
        {showPrefix ? (
          <TextExt text={prefix} />
        ) : (
          <IconWrapper icon={leftIcon} testID={`fl-ic-left-${label}`} />
        )}
        <TextInput
          style={[styles.textInputStyle, textInputStyle]}
          placeholder={placeholder}
          placeholderTextColor={styles.placeholderTextColor}
          editable={isEditable}
          underlineColorAndroid="transparent"
          returnKeyType={Platform.OS === 'ios' ? 'done' : 'default'}
          {...getTestID(`fl-${label}`)}
          {...bind}
          {...props}
        />
        {showSuffix ? (
          <TextExt text={suffix} />
        ) : (
          <IconWrapper icon={rightIcon} testID={`fl-ic-right-${label}`} onPress={onPressIcon} />
        )}
      </View>
      {!!error && <ErrorText />}
    </React.Fragment>
  );
};

FieldLabel.propTypes = {
  label: PropTypes.string,
  subLabel: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  bind: PropTypes.object,
  error: PropTypes.string,
  leftIcon: PropTypes.any,
  rightIcon: PropTypes.any,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  type: PropTypes.oneOf(['outlined', 'ghost']),
  state: PropTypes.oneOf(['disabled', 'active']),
  onPressIcon: PropTypes.func,
  style: PropTypes.object,
  textInputStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  errorStyle: PropTypes.object
};

FieldLabel.defaultProps = {
  label: '',
  subLabel: '',
  placeholder: '',
  required: false,
  bind: {},
  error: '',
  leftIcon: null,
  rightIcon: null,
  prefix: null,
  suffix: null,
  type: 'outlined',
  state: 'active',
  onPressIcon: noop,
  style: {},
  textInputStyle: {},
  labelStyle: {},
  errorStyle: {}
};
