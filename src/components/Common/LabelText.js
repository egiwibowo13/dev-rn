import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../DataDisplay/Text';
import { isEmpty } from '../../utils';
import { useThemeContext } from '../../utils/ThemeContext';

export const LabelText = ({ label, labelStyle, subLabel, required, testID}) => {
    const theme = useThemeContext();
    if (isEmpty(label)) {return null;}
    return (
      <Text.Body2 testID={testID} style={labelStyle}>
        {label}
        {!!subLabel && <Text.Overline1>{subLabel}</Text.Overline1>}{' '}
        {required && <Text.Overline1 style={{ color: theme.colors.basePrimaryMain }}>*</Text.Overline1>}
      </Text.Body2>
    );
  };

  LabelText.propTypes = {
    label: PropTypes.string,
    labelStyle: PropTypes.object,
    subLabel: PropTypes.string,
    required: PropTypes.bool,
    testID: PropTypes.string,
  };

  LabelText.defaultProps = {
    label: '',
    labelStyle: {},
    subLabel: '',
    required: false,
    testID: 'lbl',
  };

