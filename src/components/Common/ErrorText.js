import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from '../../utils';
import { useThemeContext } from '../../utils/ThemeContext';
import { Text } from '../DataDisplay/Text';


export const ErrorText = ({error, testID, errorStyle}) => {
    const theme = useThemeContext();
    if (isEmpty(error)) {return null;}
    return <Text.Caption testID={testID} style={[{ color: theme.colors.eventError }, errorStyle]}>{error}</Text.Caption>;
  };

  ErrorText.propTypes = {
    error: PropTypes.string,
    errorStyle: PropTypes.object,
    testID: PropTypes.string,
  };

  ErrorText.defaultProps = {
    error: '',
    errorStyle: {},
    testID: 'err',
  };
