import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(1),
  },
  card: {
    backgroundColor: theme.palette.foreground,
  },
  typography: {
    color: theme.palette.primary.main,
  },
}));

export default useStyles;
