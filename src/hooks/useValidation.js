import { useEffect, useState } from 'react';
import { REGEXP } from '../common/constans/regexp';

export function useValidation(value, validations) {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;
        case 'isEmpty':
          REGEXP.EMAIL.test(value) ? setEmpty(false) : setEmpty(true);
          break;

        default:
          setEmpty(true);
      }
    }
  }, [value]);
  return {
    isEmpty,
    minLengthError,
  };
}
