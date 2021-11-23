// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import { renderHook, act } from '@testing-library/react-hooks';
import { useToggle } from '../src';
test('testing useToggle', () => {
  const { result } = renderHook(() => useToggle());
  expect(result.current.toggle).toBe(false);

  act(() => result.current.handleToggleOn());
  expect(result.current.toggle).toBe(true);

  act(() => result.current.handleToggleOff());
  expect(result.current.toggle).toBe(false);

  act(() => result.current.handleToggle());
  expect(result.current.toggle).toBe(true);
});

test('testing useToggle with init value', () => {
  const { result } = renderHook(() => useToggle(true));
  expect(result.current.toggle).toBe(true);

  act(() => result.current.handleToggleOn());
  expect(result.current.toggle).toBe(true);

  act(() => result.current.handleToggleOff());
  expect(result.current.toggle).toBe(false);

  act(() => result.current.handleToggle());
  expect(result.current.toggle).toBe(true);
});
