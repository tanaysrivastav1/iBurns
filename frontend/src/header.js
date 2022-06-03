import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import blueLogo from './bluelogo.png';

export default function ButtonAppBar() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Link to="/about">
              <Typography variant="h6" component="div" style = {{marginRight: '25px'}}>
                  About
              </Typography>
          </Link>
          <Link to="/">
              <Typography variant="h6" component="div">
                  Create
              </Typography>
          </Link>
          <div className='blueLogo'>
              <img src={blueLogo}  alt='iBurns logo camera'/>
          </div>
            
        </Toolbar>
        

      </AppBar>
    </Box>
  );
}