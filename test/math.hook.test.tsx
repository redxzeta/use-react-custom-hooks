import { renderHook, act } from '@testing-library/react-hooks';
import { useMath } from '../src';
test('testing useMath', () => {
  const { result } = renderHook(() => useMath(5));
  expect(result.current.value).toBe(5);

  act(() => result.current.calculateValue('+', 10));
  expect(result.current.value).toBe(15);

  act(() => result.current.calculateValue('-', 5));
  expect(result.current.value).toBe(10);

  act(() => result.current.calculateValue('/', 2));
  expect(result.current.value).toBe(5);

  act(() => result.current.calculateValue('*', 25));
  expect(result.current.value).toBe(125);

  act(() => result.current.calculateValue('%', 14));
  expect(result.current.value).toBe(13);

  act(() => result.current.calculateValue('^', 2));
  expect(result.current.value).toBe(169);

  expect(result.current.error).toBe(false);
  act(() => result.current.calculateValue('/', 0));
  expect(result.current.value).toBe(169);
  expect(result.current.error).toBe(true);
});
