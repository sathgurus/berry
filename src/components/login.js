import React, { useState } from 'react'
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
import axios from 'axios';
import { useAuthContext } from '../context/context';
import { setToken } from '../helpers';
import { configData } from '../config/config';
import { message } from 'antd';



export function Login(){
const [input, setInput]= useState({
  email:'',
  password:''
});
  const { setUser } = useAuthContext();

const handlechange = (event) =>{
  console.log("Event Name", event.target.name);
  console.log("Event Value", event.target.value);
 let name = event.target.name;
 let value = event.target.value;
  setInput({...input, [name]:value});


}




  const handlesubmit = async (values) => {
    console.log("Val",values);
  
   values.preventDefault();
    
    try {
      console.log("value input",input);
      const data = {
        identifier: input.email,
        password: input.password,
      };
      console.log("value identifier",data);
      const response = await axios.post(configData.Base_URL +'/auth/local', 
      //    headers: {
      //   "Content-Type": "application/json",
      // },
     {...data}
    ).then((res) => {
      console.log('Well done!');
      console.log('User profile', res.data.user);
      window.location.href='/superdash'
    });
console.log("res",response)
      const info = await response;
      console.log("res data",info);
      if (info?.error) {
        throw info?.error;
      } else {
        
        setToken(info.jwt);

        
        setUser(data.user);

        message.success(`Welcome back ${data.user.email}!`);
        

       
      }
    } catch (error) {
      console.error(error);
      console.log("Something went wrong!",error);
      
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
              value= {input.email}
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) =>handlechange(e)}
              
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value= {input.password}
              name="password"
              label="Password"
             type='password'
             
              onChange={(e)=>handlechange(e)}
              
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
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      
      </Container>
        
        
        
        </>

    );
}