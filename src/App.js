import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { IconButton, InputAdornment, TextField } from '@material-ui/core';
import { Visibility } from '@material-ui/icons';

function App() {
  return (
    <Grid container justify="center">
      <Grid item md={4}>
        <Card>
          <CardContent>
            <Box display="flex" flexDirection="column">
              <Typography align="center" variant="h4">
                Login
              </Typography>
              <TextField
                label="E-mail"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <Visibility />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Box marginTop={4} display="flex" justifyContent="center">
                <Button variant="contained" color="primary">
                  Send
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default App;
