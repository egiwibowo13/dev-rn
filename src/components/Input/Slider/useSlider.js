import { useState } from 'react';
import { defaultValidate } from '../../../utils/validation';

export const useSlider = (initialValue = 0, onValidation = defaultValidate) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState('');

  const onValueChange = _value => {
    setValue(_value);
    setError(null);
  };

  const reset = () => {
    setValue(0);
    setError('');
  };

  const onValidate = () => {
    const err = onValidation(value);
    setError(err);
  };

  const setDefaultValue = (_value, _error) => {
    setValue(_value);
    setError(_error);
  };

  return {
    value,
    error,
    setError,
    reset,
    onValidate,
    setDefaultValue,
    onValueChange,
  };
};
