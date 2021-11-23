import React from 'react';

export const useToggle = (initToggle?: boolean) => {
  const [toggle, setToggle] = React.useState<boolean>(initToggle || false);

  const handleToggleOn = () => setToggle(true);
  const handleToggleOff = () => setToggle(false);
  const handleToggle = () => setToggle(t => !t);

  return { toggle, handleToggle, handleToggleOn, handleToggleOff };
};
