import React, { useState } from 'react';
import { useThemeProvider } from '../../../theme/context-provider';
import { Switch, Input, Slider } from './ThemeToggle.styled';

const ThemeToggle: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const [trigger] = useThemeProvider();

  const handleClick = () => {
    console.log('trigger');
    trigger();
  };

  return (
    <Switch>
      <Input type="checkbox" onClick={handleClick} />
      <Slider />
    </Switch>
  );
};

export default ThemeToggle;
