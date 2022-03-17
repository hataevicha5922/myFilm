import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TheatersIcon from '@mui/icons-material/Theaters';
import { Link } from '@mui/material';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <TheatersIcon />
          </IconButton>
          <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
            MyFilms
          </Typography>
          <Button color="inherit">
            <Link href="#" underline="hover" color="Menu">
              Login
            </Link>
          </Button>
          <Button color="inherit">
            <Link href="#" underline="hover" color="Menu">
              LogUp
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
