import React from "react";
//Custom imports
//Logic

//Components

//Material UI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, experimental_sx as sx } from '@mui/material/styles';
import { red, orange, grey, purple } from "@material-ui/core/colors";

//here we create the global variables that will be used in the theme/app
const themeGlobals = createTheme({
  colors: {                               // 
    alert: orange[500],
    nothing: '#FFFFFF' ,
    danger: red[500],
    text: grey[700],
    shadow: purple[100]
  },
  palette: {
    mode: 'dark'
  }
});

//pass the globals theme to be able to access the global vabiables
const finalTheme = createTheme(themeGlobals,{
  //selector
  components: {
    //target
    MuiPaper: {
      styleOverrides: {
        /* Example how to override based on props passed to the component
        https://mui.com/material-ui/customization/theme-components/#overrides-based-on-props
        */
        root:({ ownerState, theme }) => sx({
          margin: 1,
          color: themeGlobals.colors.text,
          ":hover":{
            // backgroundColor:themeGlobals.colors.nothing,
            boxShadow: `0px 0px 2px 4px  ${themeGlobals.colors.shadow}` /* offset-x | offset-y | blur-radius | spread-radius | color */
          },
          // https://mui.com/system/borders/#border-radius
          borderRadius: 5, // 4px as default.
          backgroundColor: (ownerState.statusprop === 'Healty') ? themeGlobals.palette.mode : themeGlobals.colors.danger,
        }),
      },
    },
  },
});



const JointStatusComponent = ({jointName, status}) => {
    return(
             <ThemeProvider theme={finalTheme}> 
              <Card elevation={12} statusprop={status}> {/*passing custom prop so that the backgroundColor to change based on status(see final theme) */}
                  <CardContent>
                      <Typography variant="h6" color="text.secondary" > {jointName} </Typography>
                      <Typography variant="body2" >Status : {status} </Typography>
                      <Typography variant="body2" >Setpoint Position : </Typography>
                      <Typography variant="body2" >Actual Position : </Typography>
                      <Typography variant="body2" >Temperature : </Typography>
                  </CardContent>
               </Card>
             </ThemeProvider>

    )
}

export default JointStatusComponent;