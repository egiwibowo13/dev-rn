import React from 'react';
import { View } from 'react-native';
import SliderLib from '@react-native-community/slider';
import PropTypes from 'prop-types';
import { noop, getTestID } from '../../../utils';
import { useThemeContext } from '../../../utils/ThemeContext';
import { Text } from '../../DataDisplay/Text';
import { LabelText } from '../../Common/LabelText';
import { ErrorText } from '../../Common/ErrorText';
import styles from './Slider.styles';

export const Slider = ({
  label,
  required,
  onValueChange,
  value,
  error,
  minimum,
  maximum,
  step,
  formatter,
  onValidate,
  testID,
  labelStyle,
  errorStyle,
}) => {

  const theme = useThemeContext();
  return (
    <View style={styles.mainContainer}>
     <LabelText testID={`sl-label-${testID}`} label={label} required={required} labelStyle={labelStyle} />
      <View style={styles.sliderContainer}>
        <View style={styles.labelSliderContainer}>
          <Text.Overline1 testID={`sl-min-${testID}`} style={[styles.valueLabelStyle, { color: theme.colors.fontPrimaryLight }]}>{formatter(minimum)}</Text.Overline1>
          <Text.Overline1 testID={`sl-max-${testID}`} style={[styles.valueLabelStyle, { color: theme.colors.fontPrimaryLight }]}>{formatter(maximum)}</Text.Overline1>
        </View>
        <SliderLib
          {...getTestID(`sl-${testID}`)}
          style={styles.slider}
          value={value}
          minimumValue={minimum}
          maximumValue={maximum}
          minimumTrackTintColor={theme.colors.basePrimaryMain}
          thumbTintColor={theme.colors.basePrimaryMain}
          maximumTrackTintColor={theme.colors.eventInactive}
          onValueChange={onValueChange}
          onSlidingComplete={onValidate}
          step={step}
        />
      </View>
      <ErrorText error={error} errorStyle={errorStyle} testID={`sl-err-${testID}`} />
    </View>
  );
};

Slider.propTypes = {
  value: PropTypes.number,
  minimum: PropTypes.number,
  maximum: PropTypes.number,
  step: PropTypes.number,
  label: PropTypes.string,
  required: PropTypes.bool,
  onValueChange: PropTypes.func,
  error: PropTypes.string,
  formatter: PropTypes.func,
  onValidate: PropTypes.func,
  testID: PropTypes.string,
};

Slider.defaultProps = {
  value: 0,
  minimum: 0,
  maximum: 100,
  label: '',
  required: false,
  onValueChange: noop,
  error: '',
  step: 0,
  formatter: _value => _value,
  onValidate: noop,
  testID: '',
};
