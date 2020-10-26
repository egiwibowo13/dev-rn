import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { isEmpty, getTestID, noop } from '../../utils';
import { useThemeContext } from '../../utils/ThemeContext';

const getSize = (sizeProp) => {
    if (sizeProp === 'large') {
        return {
            width: 32,
            height: 32,
        };
    } else if (sizeProp === 'medium') {
        return {
            width: 24,
            height: 24,
        };
    } else {
        return {
            width: 16,
            height: 16,
        };
    }
};

export const Icon = ({icon: IconSVG, color, testID, size, onPress, disabled}) => {
    const context = useThemeContext();
    const colorIcon = !isEmpty(color) ? color : context.colors.basePrimaryMain;
    return (
        <TouchableOpacity {...getTestID(`ic-${testID}`)} style={styles.iconWrapper} disabled={disabled || onPress === noop} onPress={onPress}>
          <IconSVG color={colorIcon} {...getSize(size)} />
        </TouchableOpacity>
      );
};

const styles = StyleSheet.create({
    iconWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
      },
});

Icon.propTypes = {
    icon: PropTypes.oneOfType([PropTypes.element, PropTypes.node, PropTypes.any]).isRequired,
    color: PropTypes.string,
    testID: PropTypes.string,
    size: PropTypes.oneOf(['large', 'medium', 'small']),
    onPress: PropTypes.func,
    disabled: PropTypes.bool
  };

  Icon.defaultProps = {
    color: null,
    testID: 'testID',
    size: 'medium',
    onPress: noop,
    disabled: false
  };
