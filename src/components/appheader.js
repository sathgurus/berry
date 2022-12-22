import { AppBar, Badge, Box, Button, CssBaseline, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import React from 'react';
import { removeToken } from '../helpers';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/context';



export  function Appheader() {

    const { user, setUser } = useAuthContext();
    const navigate = useNavigate();

    const handleLogout = () => {
        removeToken();
        setUser(undefined);
        navigate("/", { replace: true });
      };

  return (
    <>
    <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" >
          <Toolbar
            sx={{
              pr: '24px', 
            }}
            
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
            
              sx={{
                marginRight: '36px',
                  display: 'none' ,
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <Button
              className="auth_button_signUp"
              color='white'
              variant='outline'

              onClick={handleLogout}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
        </Box>
        </>
  );
}
