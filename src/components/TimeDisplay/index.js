import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { formatLabel, secToHMS } from '../../helpers/helperFunctions';

const TimeDisplay = ({ time, activity }) => {
  return (
    <>
      <Box my={2} style={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h4">
          {activity ? formatLabel(activity) : 'Set Timer'}
        </Typography>
      </Box>
      <Box my={2} style={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h3">{secToHMS(time)}</Typography>
      </Box>
    </>
  );
};

export default TimeDisplay;
