import {useState, useCallback} from 'react';
import { defaultValidate } from '../../../utils/validation';

/**
 *
 * @param {{
 *    initialValue: string,
 *    onValidation: Function
 * }} props
 */
const useFieldLabel = (initialValue = '', onValidation = defaultValidate) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState('');
  const [ref, setRef] = useState({});

  const setFieldRef = (fieldRef) => {
    setRef(fieldRef);
  };

  const onBlur = useCallback(() => {
    const err = onValidation(value);
    setError(err);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const onChangeText = useCallback(
    (text) => {
      setValue(text);
      setError(null);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [value],
  );

  const reset = () => {
    setValue('');
    setError(null);
  };

  return {
    value,
    setValue,
    error,
    setError,
    reset,
    onValidate: onBlur,
    fieldRef: ref,
    bind: {
      value,
      onChangeText,
      onBlur,
      ref: setFieldRef,
    },
  };
};

export {useFieldLabel};
export default {useFieldLabel};
