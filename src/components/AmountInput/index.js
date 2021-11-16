import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';

const AmountInput = ({ time, amount, setAmount }) => {
  const handleTimeChange = e => {
    const newAmount = e.target.value;
    if (+newAmount >= 0) setAmount(+newAmount);
  };
  return (
    <FormControl fullWidth variant="standard">
      <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
      <Input
        id="standard-adornment-amount"
        type="number"
        inputProps={{ min: '0' }}
        value={amount}
        onChange={handleTimeChange}
        disabled={!!time}
      />
    </FormControl>
  );
};

export default AmountInput;
