import { useState } from 'react';

export const useCheckBox = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const onPress = () => {
    setValue(!value);
  };

  const reset = () => {
    setValue(false);
  };

  return {
    value,
    setValue,
    reset,
    onPress,
    checked: value
  };
};
