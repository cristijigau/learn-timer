import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { secToHMS } from '../../helpers/helperFunctions';

const TimeDisplay = ({ time }) => {
  return (
    <Box my={2} style={{ display: 'flex', justifyContent: 'center' }}>
      <Typography variant="h3">{secToHMS(time)}</Typography>
    </Box>
  );
};

export default TimeDisplay;
