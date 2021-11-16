import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import { formatLabel } from '../../helpers/helperFunctions';

const TimeInput = ({ inputValue, setInputValue, time, activity }) => {
  const handleTimeChange = e => {
    const newTime = e.target.value;
    if (+newTime >= 0) setInputValue(+newTime);
  };

  return (
    <FormControl fullWidth variant="standard">
      <InputLabel htmlFor="standard-adornment-time">
        {formatLabel(activity)} Time
      </InputLabel>
      <Input
        id="standard-adornment-time"
        endAdornment={<InputAdornment position="end">min</InputAdornment>}
        type="number"
        inputProps={{ min: '0' }}
        value={inputValue}
        onChange={handleTimeChange}
        disabled={!!time}
      />
    </FormControl>
  );
};

export default TimeInput;
