import React from "react";
//Custom imports
//Logic

//Components

//Material UI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, experimental_sx as sx } from '@mui/material/styles';
import { red, orange, grey, purple, green } from "@material-ui/core/colors";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

//here we create the global variables that will be used in the theme/app
const themeGlobals = createTheme({
  colors: {                               // 
    alert: orange[500],
    nothing: '#FFFFFF' ,
    danger: red[400],
    text: 'rgba(65,222,250)',
    shadow: purple[100],
    background: 'rgba(0,23,49,0.9)',
    statusTextHealty: '#3AFF00',
    statusTextError: '#5F0505'
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
          marginBottom: 1,
          color: themeGlobals.colors.text,
          ":hover":{
            // backgroundColor:themeGlobals.colors.nothing,
            boxShadow: `0px 0px 1px 2px  ${themeGlobals.colors.shadow}` /* offset-x | offset-y | blur-radius | spread-radius | color */
          },
          // https://mui.com/system/borders/#border-radius
          borderRadius: 2, // 4px as default.
          backgroundColor: (ownerState.statusprop === 'Healty') ? themeGlobals.colors.background : themeGlobals.colors.danger,
          borderStyle: 'outset none none outset;',
          borderColor: themeGlobals.colors.text,
          borderWidth: 1,    
        }),
      },
    },
  },
});



const JointStatusComponent = ({jointName, status}) => {
    return(
             <ThemeProvider theme={finalTheme}> 
             {/* draws a small thick line above the card */}
             <Box sx={{ display: 'flex', justifyContent: 'center'}} >
                      <Box sx={{ alignSelf: 'bottom', borderColor: (theme)=>(theme.colors.text), borderStyle: 'outset', borderWidth: 2, width:'60%' }} /> 
              </Box>
              <Card elevation={0} statusprop={status}> {/*passing custom prop so that the backgroundColor to change based on status(see final theme) */}
                  <CardContent>
                      <Typography variant="h6" color="text.secondary" > {jointName} </Typography>
                      <Typography variant="body2" color={status === 'Healty' ? (theme)=>(theme.colors.statusTextHealty) : (theme)=>(theme.colors.statusTextError) }> Status : {status} </Typography>
                      <Typography variant="body2" > Setpoint Position : </Typography>
                      <Typography variant="body2" > Actual Position : </Typography>
                      <Typography variant="body2" > Temperature :  </Typography>
                  </CardContent>
              
               </Card>
             </ThemeProvider>

    )
}

export default JointStatusComponent;