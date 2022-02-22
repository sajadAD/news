import { createTheme } from "@mui/material";
import {grey} from "@mui/material/colors"


const theme = createTheme({
    palette: {
        // white
        primary: {
          light: grey[200],
          main: grey[200],
          dark: grey[200],
          contrastText: '#fff',
        },
        secondary: {
          light: '#ff7961',
          main: '#f44336',
          dark: '#ba000d',
          contrastText: '#000',
        },
      },
})
export default theme;