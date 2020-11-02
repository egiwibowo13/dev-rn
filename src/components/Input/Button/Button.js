import React from 'react';
import {TouchableOpacity, View, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import { useThemeContext } from '../../../utils/ThemeContext';
import { getTestID, isEmpty } from '../../../utils';
import { Text } from '../../DataDisplay/Text';
import styles, { getContainerStyle, getTextStyle, getIconColor } from './Button.styles';


/**
 *
 * @param {{
 *    title: string,
 *    onPress: Function,
 *    isUpperCase: boolean,
 *    size: 'small' | 'medium' | 'large',
 *    width: 'sort' | 'almost' | 'long' | 'full-width',
 *    type: 'contained' | 'outlined' | 'primary' | 'secondary' | 'nude',
 *    iconPosition: 'left' | 'right',
 *    state: 'active' | 'disabled' | 'loading',
 *    icon: Element,
 *    style: Object
 * }} props
 */
export const Button = (props) => {
  const {
    title,
    onPress,
    size,
    width,
    isUpperCase,
    type,
    icon,
    iconPosition,
    state,
    style,
  } = props;

  const theme = useThemeContext();

  const { containerStyle, containerDisabled } = getContainerStyle({size, width, type, theme});
  const { textStyle, textStyleDisabled } = getTextStyle({ type, theme });
  const { icColor, icColorDisabled } = getIconColor({ type, theme });

  let containerButtonStyle = containerStyle;
  let titleStyle = textStyle;
  let iconColor = icColor;

  if (state === 'disabled' || state === 'loading') {
    containerButtonStyle = containerDisabled;
    titleStyle = textStyleDisabled;
    iconColor = icColorDisabled;
  }

  const getTitle = () => {
    if (state === 'loading') {
      return 'Loading...';
    } else if (isUpperCase) {
      return title.toUpperCase();
    }
    return title;
  };

  const IconWrapper = ({icon: Icon}) => {
    if (state === 'loading') {
      return <ActivityIndicator size="small" color={iconColor} />;
    }
    return (
      <View style={styles.iconWrapper}>
        <Icon color={iconColor} width={16} height={16} />
      </View>
    );
  };

  const TextComponent = size === 'small' ? Text.Button2 : Text.Button1;
  const showIcon = size !== 'small' && !isEmpty(icon);

  return (
    <TouchableOpacity
      {...getTestID(`btn-${title}`)}
      style={[containerButtonStyle, style]}
      disabled={state === 'disabled' || state === 'loading'}
      onPress={onPress}>
      {showIcon && iconPosition === 'left' && <IconWrapper icon={icon} />}
      <TextComponent style={titleStyle}>{getTitle()}</TextComponent>
      {showIcon && iconPosition === 'right' && <IconWrapper icon={icon} />}
    </TouchableOpacity>
  );
};

Button.propTypes = {
  isUpperCase: PropTypes.bool,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  type: PropTypes.oneOf([
    'contained',
    'outlined',
    'primary',
    'secondary',
    'nude',
  ]),
  size: PropTypes.oneOf([
    'small', 'medium', 'large',
  ]),
  width: PropTypes.oneOf(['sort', 'almost', 'long', 'full-width']),
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.node, PropTypes.any]),
  iconPosition: PropTypes.oneOf(['left', 'right']),
  state: PropTypes.oneOf(['disabled', 'active', 'loading']),
  style: PropTypes.object,
};

Button.defaultProps = {
  state: 'active',
  isUpperCase: true,
  type: 'primary',
  size: 'medium',
  width: 'long',
  onPress: () => {},
  icon: null,
  iconPosition: 'left',
  style: {},
};
