import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { formatLabel, secToHMS } from '../../helpers/helperFunctions';

const TimeDisplay = ({ time, activity, timerState }) => {
  return (
    <>
      <Box my={2} style={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h4">
          {timerState ? formatLabel(activity) : 'Set Timer'}
        </Typography>
      </Box>
      <Box my={2} style={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h3">{secToHMS(time)}</Typography>
      </Box>
    </>
  );
};

export default TimeDisplay;
