import React from 'react';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseIcon from '@mui/icons-material/Pause';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import IconButton from '@mui/material/IconButton';

function getIcon(type) {
  switch (type) {
    case 'play':
      return <PlayCircleIcon />;
    case 'pause':
      return <PauseIcon />;
    case 'reset':
      return <RotateLeftIcon />;
    default:
      return null;
  }
}

const Button = props => {
  const { type, setTimerState, timerState, time } = props;

  const handlePlay = () => {
    setTimerState('play');
  };
  const handlePause = () => {
    setTimerState('pause');
  };
  const handleReset = () => {
    setTimerState('reset');
  };

  const getButtonAction = type => {
    switch (type) {
      case 'play':
        return handlePlay;
      case 'pause':
        return handlePause;
      case 'reset':
        return handleReset;
      default:
        return null;
    }
  };

  const icon = getIcon(type);
  const action = getButtonAction(type);
  const active = timerState === type && time;
  return (
    <IconButton
      {...props}
      onClick={action}
      style={active ? { backgroundColor: 'rgba(0, 0, 0, 0.04)' } : {}}
    >
      {icon}
    </IconButton>
  );
};

export default Button;
