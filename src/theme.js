import { createTheme } from '@mui/material';

const theme = createTheme({
   typography: {
    "fontFamily": `"Nunito", "Helvetica", "Arial", sans-serif`,
   //  "fontFamily": `"Source Serif 4", "serif"`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
   }
});

export default theme;