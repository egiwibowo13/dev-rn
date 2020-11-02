import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { noop } from '../../../../utils';
import { LabelText } from '../../../Common/LabelText';
import { ErrorText } from '../../../Common/ErrorText';
import { RadioButtonItem } from '../RadioButtonItem';
import styles from './RadioButton.styles';

export const RadioButton = props => {
  const { options = [], activeKey, label, direction, required, onPressItem, error, changeMap, testID } = props;
  return (
    <View style={styles.mainContainer}>
      <LabelText label={label} required={required} testID={`rb-lbl-${testID}`} />
      <View style={direction === 'row' ? styles.rowContainer : styles.columnContainer}>
        {options.map((item, index) => {
          const { disabled = false } = item;
          return (
            <RadioButtonItem
              key={index}
              title={item[changeMap.title]}
              selected={activeKey === item[changeMap.key]}
              onPress={() => onPressItem(item)}
              disabled={disabled}
              error={error}
            />
          );
        })}
      </View>
      <ErrorText error={error} testID={`rb-err-${testID}`} />
    </View>
  );
};

RadioButton.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.string,
      disabled: PropTypes.bool,
    })
  ).isRequired,
  activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  required: PropTypes.bool,
  direction: PropTypes.oneOf(['column', 'row']),
  onPressItem: PropTypes.func,
  error: PropTypes.string,
  changeMap: PropTypes.shape({
    key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

RadioButton.defaultProps = {
  activeKey: '',
  label: '',
  required: false,
  direction: 'column',
  onPressItem: noop,
  error: '',
};
