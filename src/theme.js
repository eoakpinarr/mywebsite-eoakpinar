import { createTheme } from '@mui/material/styles';

// MUI teması oluşturun
const theme = createTheme({
  palette: {
      primary: {
          main: '#1976d2', // Birincil renk
      },
      secondary: {
          main: '#dc004e', // İkincil renk
      },
  }
});

export default theme;
