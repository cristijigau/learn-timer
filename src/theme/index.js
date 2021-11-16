import { createTheme } from '@mui/material/styles';
import { colors } from './constants';

const theme = createTheme({
  palette: {
    ...colors,
  },
});

export default theme;
