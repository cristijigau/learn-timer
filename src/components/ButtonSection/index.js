import React from 'react';
import Box from '@mui/material/Box';
import Button from '../Button';

const ButtonSection = ({ setTimerState, timerState, time }) => {
  const types = ['play', 'pause', 'reset'];
  const buttons = types.map(type => (
    <Button
      type={type}
      setTimerState={setTimerState}
      timerState={timerState}
      time={time}
      key={type}
    />
  ));
  return (
    <Box my={2} style={{ display: 'flex', justifyContent: 'center' }}>
      {buttons}
    </Box>
  );
};

export default ButtonSection;
