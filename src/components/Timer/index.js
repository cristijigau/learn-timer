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
import AmountInput from '../AmountInput';

const audio = new Audio(
  'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3'
);

const Timer = () => {
  const classes = useStyles();

  const [time, setTime] = useState(0);
  const [timerState, setTimerState] = useState();
  const [timerId, setTimerId] = useState();
  const [studyTime, setStudyTime] = useState(0);
  const [breakTime, setBreakTime] = useState(0);
  const [amount, setAmount] = useState(1);
  const [activity, setActivity] = useState('study');

  useEffect(() => {
    if (!timerState) return;
    if (timerState === 'play' && studyTime) startTimer(activity);
    if (timerState === 'pause') stopTimer();
    if (timerState === 'reset' || !studyTime || !amount) resetTimer();
    return () => clearInterval(timerId);
  }, [timerState]);

  useEffect(() => {
    if (!time && timerId) {
      handleEndOfTime();
    }
  }, [time]);

  function startTimer(activity) {
    if (!amount) return;
    if (!time) setTime(activity === 'study' ? studyTime * 60 : breakTime * 60);
    const id = setInterval(() => {
      setTime(prev => prev - 1);
    }, 1000);
    setTimerId(id);
  }

  function stopTimer() {
    clearInterval(timerId);
    console.log('stopping interval: ', timerId);
  }

  function resetTimer() {
    stopTimer();
    setTime(0);
    setTimerId();
    setStudyTime(0);
    setBreakTime(0);
    setTimerState();
    setAmount(1);
    setActivity('study');
    stopAudio();
  }

  function handleEndOfTime() {
    playAudio();
    if (amount) {
      if (activity === 'study') setAmount(prev => prev - 1);
      setActivity(activity === 'study' ? 'break' : 'study');
      startTimer(activity === 'study' ? 'break' : 'study');
      stopTimer();
    }
    if (!amount) resetTimer();
  }

  function playAudio() {
    audio.play();
  }

  function stopAudio() {
    audio.pause();
    audio.currentTime = 0;
  }

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
              <TimeDisplay time={time} activity={activity} />
              <TimeInput
                inputValue={studyTime}
                setInputValue={setStudyTime}
                time={time}
                activity="study"
              />
              <Box mt={2}>
                <TimeInput
                  inputValue={breakTime}
                  setInputValue={setBreakTime}
                  time={time}
                  activity="break"
                />
              </Box>
              <Box mt={2}>
                <AmountInput
                  time={time}
                  amount={amount}
                  setAmount={setAmount}
                />
              </Box>
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
