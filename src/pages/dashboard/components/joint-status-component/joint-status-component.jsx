import React from "react";
//Custom imports
//Logic

//Components

//Material UI
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, experimental_sx as sx } from '@mui/material/styles';
import { red, orange, grey } from "@material-ui/core/colors";
import { Mode, PlayLessonTwoTone } from "@mui/icons-material";
import { palette } from "@mui/system";


//here we create the global variables that will be used in the theme/app
const themeGlobals = createTheme({
  colors: {                               // 
    danger: orange[500],
    nothing: '#FFFFFF' ,
    hovering: red[500],
    text: grey[700],
  },
  palette: {
    mode: 'dark'
  }
});

//
const finalTheme = createTheme(themeGlobals,{
  //selector
  components: {
    //target
    MuiCard: {
      styleOverrides: {
        root: sx({
          margin: 1,
          color: themeGlobals.colors.text,
          backgroundColor: themeGlobals.palette.mode,
          ":hover":{
            backgroundColor:themeGlobals.colors.hovering,
          },
          // https://mui.com/system/borders/#border-radius
          borderRadius: 5, // 4px as default.
        }),
      },
    },
  },
});


const JointStatusComponent = ({jointName, status}) => {
    return(
             <ThemeProvider theme={finalTheme}> 
              <Card elevation={12} >
                  <CardContent>
                      <Typography variant="h6" color="text.secondary" > {jointName} </Typography>
                      <Typography variant="body2" >Status : {status} </Typography>
                      <Typography variant="body2" >Setpoint Position : </Typography>
                      <Typography variant="body2" >Actual Position : </Typography>
                      <Typography variant="body2" >Temperature : </Typography>
                  </CardContent>
                  {/* <CardActions>
                      <Button size="small">button</Button>
                  </CardActions> */}
               </Card>
             </ThemeProvider>

    )
}

export default JointStatusComponent;