import { createTheme } from "@mui/material";

export const theme=createTheme({
    typography:{
        h6:{
            textTransform:"initial",
        },
        body2:{
            textTransform:"initial",
        }
    },
    MuiContainer:{
        root:{
            padding:0
        }
    },
    components: {
        MuiToolbar: {
            styleOverrides: {
                dense: {
                    height: 65,
                    minHeight: 65
                }
            }
        }
    },
    status: {
        info: 'rgb(255, 174, 109)',
        paper: 'rgb(255, 174, 109)',
      },
  
})