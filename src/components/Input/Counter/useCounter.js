import { useEffect, useState } from 'react';
import { convertToNumber } from '../../../utils';
import { useFieldLabel } from '../FieldLabel';

const mapToSetInitialValue = (value, minValue, maxValue) => {
  if (value >= minValue && value <= maxValue) {
    return `${value}`;
  } else if (value < minValue) {
    return `${minValue}`;
  } else if (value > maxValue) {
    return `${maxValue}`;
  }
  return '0';
};

const useCounter = (initialValue, minValue, maxValue, onChangeValue) => {
  const [disableAddButton, setDisableAddButton] = useState(false);
  const [disableDecreaseButton, setDisableDecreaseButton] = useState(true);
  const [error, setError] = useState('');
  const flTotal = useFieldLabel(mapToSetInitialValue(initialValue, minValue, maxValue));

  const updateAddUI = nValue => {
    if (nValue >= maxValue) {
      setDisableAddButton(true);
    } else {
      setDisableAddButton(false);
    }
  };
  const updateDecreaseUI = nValue => {
    if (nValue <= minValue) {
      setDisableDecreaseButton(true);
    } else {
      setDisableDecreaseButton(false);
    }
  };

  const onAddCounter = () => {
    if (Number(flTotal.value) < maxValue) {
      const nValue = Number(flTotal.value) + 1;
      flTotal.setValue(nValue);
      onChangeValue(nValue);
    }
  };

  const onDecreaseCounter = () => {
    if (Number(flTotal.value) > minValue) {
      const nValue = Number(flTotal.value) - 1;
      flTotal.setValue(nValue);
      onChangeValue(nValue);
    }
  };

  const onSubmitEditing = ({ nativeEvent: { text } }) => {
    const nValue = convertToNumber(text);
    const totalValue = mapToSetInitialValue(nValue, minValue, maxValue);
    flTotal.setValue(totalValue);
    onChangeValue(Number(totalValue));
  };

  useEffect(() => {
    const nValue = convertToNumber(flTotal.value);
    updateAddUI(nValue);
    updateDecreaseUI(nValue);
  }, [flTotal.value]);

  useEffect(() => {
    flTotal.setValue(initialValue);
  }, [initialValue]);

  return {
    bind: {
      onAddCounter,
      onDecreaseCounter,
      flTotal: {
        ...flTotal,
        value: `${flTotal.value}`,
      },
      onSubmitEditing,
    },
    view: {
      disableAddButton,
      disableDecreaseButton,
      maxLength: `${maxValue}`.length + 1,
      error,
    },
    setValue: flTotal.setValue,
    setError,
  };
};

export { useCounter };
export default { useCounter };
