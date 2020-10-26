import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { noop } from '../../utils';
import { colors } from '../../utils/theme';
import {FieldLabel} from '../FieldLabel';
import {Text} from '../Text';
import {Icon} from '../Icon';
import styles from './Counter.styles';
import { useCounter } from './useCounter';

export const Counter = props => {
  const { label, value, minValue, maxValue, onChangeValue, customContainerStyle } = props;
  const {
    bind: { onAddCounter, onDecreaseCounter, flTotal, onSubmitEditing },
    view: { disableAddButton, disableDecreaseButton, maxLength, error }
  } = useCounter(value, minValue, maxValue, onChangeValue);
  const styleAdd = disableAddButton ? styles.circleDisable : styles.circleEnable;
  const styleDecrease = disableDecreaseButton ? styles.circleDisable : styles.circleEnable;

  const IconMinus = ({color}) => {
    return(
      <View style={[styleDecrease]}>
          <Text.Body1 style={{color: colors.white}}>-</Text.Body1>
      </View>
    )
  }

  const IconPlus = ({color}) => {
    return(
      <View style={[styleAdd]}>
        <Text.Body1 style={{color: colors.white}}>+</Text.Body1>
      </View>
    )
  }

  return (
    <View style={[styles.container, customContainerStyle]}>
      <Text.Overline1>{label}</Text.Overline1>
      <View style={styles.content}>
        <Icon disabled={disableDecreaseButton} icon={IconMinus} onPress={() => onDecreaseCounter()} />
        <FieldLabel
          style={styles.flContainer}
          maxLength={maxLength}
          keyboardType="numeric"
          onSubmitEditing={e => onSubmitEditing(e)}
          textAlign={'center'}
          {...flTotal}
        />
        <Icon disabled={disableAddButton} icon={IconPlus} onPress={() => onAddCounter()} />
      </View>
      <Text.Caption>{error}</Text.Caption>
    </View>
  );
};

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  label: PropTypes.string,
  onChangeValue: PropTypes.func,
  customContainerStyle: PropTypes.object
};

Counter.defaultProps = {
  label: '',
  minValue: 0,
  maxValue: 99,
  onChangeValue: noop,
  customContainerStyle: {}
};
