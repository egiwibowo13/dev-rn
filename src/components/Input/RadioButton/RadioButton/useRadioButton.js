import { useState } from 'react';
import { defaultValidate } from '../../../../utils/validation';

export const useRadioButton = (
  initialKey = '',
  onValidation = defaultValidate,
  changeMap = { key: 'key', title: 'title' }
) => {
  const [activeKey, setActiveKey] = useState(initialKey);
  const [selectedValue, setSelectedValue] = useState({});
  const [error, setError] = useState('');
  const { key = 'key' } = changeMap;

  const onPressItem = (item = {}) => {
    setActiveKey(item[key]);
    setSelectedValue(item);
    setError(null);
  };

  const reset = () => {
    setActiveKey('');
    setError(null);
    setSelectedValue({});
  };

  const onValidate = () => {
    const err = onValidation(activeKey);
    setError(err);
  };

  const setDefaultValue = (itemToSet, errorToSet) => {
    setActiveKey(itemToSet[key]);
    setSelectedValue(itemToSet);
    setError(errorToSet);
  };

  return {
    activeKey,
    setActiveKey,
    error,
    setError,
    selectedValue,
    setSelectedValue,
    reset,
    onValidate,
    onPressItem,
    setDefaultValue,
    changeMap: { key: changeMap.key || 'key', title: changeMap.title || 'title' },
  };
};
