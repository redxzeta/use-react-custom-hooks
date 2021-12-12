import { useState } from 'react';

type Operation = '+' | '-' | '*' | '/' | '%' | '^';
export const useMath = (userInput: number = 0) => {
  const [value, setValue] = useState<number>(userInput);
  const [error, setError] = useState(false);
  const calculateValue = (
    operator: Operation = '+',
    secondValue: number = 0
  ) => {
    setError(false);
    if (operator === '+') setValue(v => v + secondValue);
    else if (operator === '-') setValue(v => v - secondValue);
    else if (operator === '/' && secondValue !== 0)
      setValue(v => Math.floor(v / secondValue));
    else if (operator === '*') setValue(v => v * secondValue);
    else if (operator === '%') setValue(v => v % secondValue);
    else if (operator === '^' && secondValue >= 0)
      setValue(v => Math.floor(Math.pow(v, secondValue)));
    else setError(true);
  };

  return { value, calculateValue, error };
};
