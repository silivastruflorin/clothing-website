import { AUTH_REUEST } from '../../redux/reducers/user/userSlice.reducer';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//material UI
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

//Routing
import { push } from 'connected-react-router';

//custom Imports
import { IsLoggedInSelector, LoggedInMessageSelector } from '../../redux/selectors/selectors'


// const userAcount = {
//     email : 'silivastruflorin@yahoo.ro',
//     password: 'testtest',
// }
function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const theme = createTheme();

const  LogInPage = () => {
    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');
    let loggedIn = useSelector(IsLoggedInSelector);
    let LogginMessage = useSelector(LoggedInMessageSelector);
    const dispatch = useDispatch();

    useEffect(
        () => {
            // Update the document title using the browser API
            if (loggedIn === true){
                dispatch(push('/')) // home page
            }
          },
          [loggedIn,dispatch]);

        return(
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                    Sign in
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}
                                            onSubmit={(e) => {e.preventDefault();
                                                             dispatch(AUTH_REUEST({email:email,password:password}))}}
                    >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={(e)=> SetEmail(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(e)=> SetPassword(e.target.value)}
                        helperText={LogginMessage.code !== "" ? LogginMessage.code : "" }
                        error={(LogginMessage.code === undefined) ?  null : 'error' }
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                        <Link href="#" variant="body2" >
                        disabled Forgot password? 
                        </Link>
                        </Grid>
                        <Grid item>
                        <Link variant="body2" onClick={()=>{dispatch(push('/user/SignUp'))}}>
                            {"Don't have an account? Sign Up"}
                        </Link>
                        </Grid>
                    </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
                </Container>
            </ThemeProvider>
        )
  }

  export default LogInPage;


