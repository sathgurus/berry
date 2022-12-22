

import * as React from 'react';
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
import axios from 'axios';
import { configData } from '../config/config';




export  function SignUp() {
  
    const handlesubmit = async(event) =>{
        event.preventDefault();
        
        var firstname=document.getElementById('firstName').value;
        var lastname=document.getElementById('lastName').value;
        var email=document.getElementById('email').value;
        var password=document.getElementById('password').value;
        
    
        const users={
          data:{
          firstname:firstname,
          lastname:lastname,
          email:email,
          password:password
        }
      }

      if(firstname ==='' || firstname === null){
        alert('Enter the firstname');
      }
      else if(lastname ==='' || lastname === null){
        alert('Enter the lastname');
      }
        else if(email ==='' || email === null){
          alert('Enter the Email');
    
        }
        else if(password === '' || password === null){
          alert('Enter the Passowrd');
        }
        else{
           axios.post(configData.Base_URL + '/berry-users',users)
          
          .then(function(res){
            
            alert('successful');
            console.log('response',res);
            let id=res.data.id;
            localStorage.setItem('userid',id);
            window.location.href='/superdash';
          })
          .catch(function(error){
            console.log("error",error);
            alert(error);
            // window.location.reload();
          })
      }
      }

  return (
    
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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handlesubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
        
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
    
      </Container>

  );
}