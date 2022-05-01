import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';

import CustomizedBadges from '../../components/shopping-Cart/ShoppingCartIcon.component';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { push } from 'connected-react-router';
import { AUTH_LOGOUT_REQ } from '../../redux/reducers/user/userSlice.reducer';
import { authService } from '../../services/authentification/auth';

const pages = ['Dashboard', 'Portofolio'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

let HeaderComponent = () => {
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);   
    
  };

  const handleCloseNavMenu = (option) => {
    setAnchorElNav(null);
    setAnchorElUser(null);
    if (option === "Logout") {
      console.log("Logout started");
      dispatch(AUTH_LOGOUT_REQ())
    }else if (option === "Dashboard") {
      console.log("Dashboard is here");
    }
  };



  return (
    <AppBar position="static" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            onClick={()=> dispatch(push('/'))}
          >
            LOGO HERE(Home)
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
                onClick={()=> dispatch(push(`/${page}`)) }
              >
                {page}
              </Button>
            ))}
          </Box>
          
          <Box sx={{ flexGrow: 0 }}>
          <Grid container spacing={4}>
            <Grid item xs>
              <CustomizedBadges />  {/* Shopping cart badge  */}
            </Grid>
            <Grid item xs>
              <Tooltip title="Open settings">
                <IconButton onClick={e => authService.getCurrentUser() ? handleOpenUserMenu(e) : dispatch(push("/user/SignIn"))} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="https://picsum.photos/id/1010/100/100" />
                </IconButton>
               </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={()=>setAnchorElUser(null)}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={()=>handleCloseNavMenu(setting)}>
                    <Typography textAlign="center" >{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Grid>
          </Grid>     
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

// const mapDispatchToProps = dispatch => {
//   return {
//       push: (page) => dispatch(push(page))
//   }
// // }

// HeaderComponent = connect(null,mapDispatchToProps)(HeaderComponent);
export {HeaderComponent};