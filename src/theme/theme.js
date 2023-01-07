import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
      white: '#fff',
      main: '#6a2e2e',
      lightGray: '#F7F9F9',
      danger: '#d63447',
      gray:' rgb(55 48 163)',
      base: 'rgb(148 163 184)'
  },
  typography: {
    textXs: 12,
    textSm: 14,
    textMd:16,
    textL:18,
    textXl:20,
    text2Xl:22,
    text3Xl:24
  },
});

export default theme;