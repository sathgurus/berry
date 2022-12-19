import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { configData } from '../config/config';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { setToken } from '../helpers';
import { useAuthContext } from '../context/authcontext';


export function Login(){

  const navigate = useNavigate();

  const { setUser } = useAuthContext();
    
      const [isLoading, setIsLoading] = useState(false);
    
      const [error, setError] = useState("");
    
      const handlesubmit= async (values) => {
        setIsLoading(true);
        try {
          const value = {
            identifier: values.email,
            password: values.password,
          };
          const response = await axios.post(configData.Base_URL + '/api/berry-users',value)

        
    
          const data = await response.json();
          if (data?.error) {
            throw data?.error;
          } else {
          
            setToken(data.jwt);
    
          
            setUser(data.user);
    
            alert.success(`Welcome back ${data.user.email}!`);
    
            navigate("/profile", { replace: true });
          }
        } catch (error) {
          console.error(error);
          setError(error?.message ?? "Something went wrong!");
        } finally {
          setIsLoading(false);
        }
      };

  
    

    return(
        <>
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
          <Box component="form" onSubmit={handlesubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              
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
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
        
        
        
        </>

    );
}