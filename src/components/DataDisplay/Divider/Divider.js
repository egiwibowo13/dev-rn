import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { useThemeContext } from '../../../utils/ThemeContext';
import styles from './Divider.styles';

export const Divider = ({ style }) => {
    const theme = useThemeContext();
    return (
        <View style={[styles.line, { backgroundColor: theme.colors.grey}, style]} />
    )
};

Divider.propTypes = {
    style: PropTypes.object
};

Divider.defaultProps = {
    style: {}
};
