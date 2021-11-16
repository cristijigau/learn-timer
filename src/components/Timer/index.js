import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import useStyles from './styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TimeInput from '../TimeInput';
import ButtonSection from '../ButtonSection';
import TimeDisplay from '../TimeDisplay';

const Timer = () => {
  const classes = useStyles();

  const audio = new Audio('../../assets/audio/alarm.mp3');

  const [time, setTime] = useState(0);
  const [timerState, setTimerState] = useState();
  const [timerId, setTimerId] = useState();
  const [inputValue, setInputValue] = useState(0);

  useEffect(() => {
    if (!timerState) return;
    if (timerState === 'play' && inputValue) startTimer();
    if (timerState === 'pause') stopTimer();
    if (timerState === 'reset' || !inputValue) resetTimer();
    return () => clearInterval(timerId);
  }, [timerState]);

  useEffect(() => {
    if (!time && timerId) handleEndOfTime();
  }, [time]);

  function startTimer() {
    if (!time) setTime(inputValue * 60);
    const id = setInterval(() => {
      setTime(prev => prev - 1);
    }, 1000);
    setTimerId(id);
  }

  function stopTimer() {
    clearInterval(timerId);
  }

  function resetTimer() {
    stopTimer();
    setTime(0);
    setTimerId();
    setInputValue(0);
    setTimerState();
    stopAudio();
  }

  function handleEndOfTime() {
    stopTimer();
    playAudio();
  }

  function playAudio() {
    audio.play();
  }

  function stopAudio() {
    audio.pause();
    audio.currentTime = 0;
  }

  audio.play();

  return (
    <Box className={classes.root}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Card className={classes.card}>
            <CardHeader
              title={
                <Typography className={classes.typography}>
                  Learn Timer
                </Typography>
              }
            >
              Learn Timer
            </CardHeader>
            <CardContent>
              <TimeDisplay time={time} />
              <TimeInput
                inputValue={inputValue}
                setInputValue={setInputValue}
                time={time}
              />
              <ButtonSection
                setTimerState={setTimerState}
                timerState={timerState}
                time={time}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Timer;
