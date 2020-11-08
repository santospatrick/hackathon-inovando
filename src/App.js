import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { IconButton, InputAdornment } from '@material-ui/core';
import { Visibility } from '@material-ui/icons';
import { Form } from 'react-final-form';
import { TextField, makeValidate } from 'mui-rff';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

function App() {
  const onSubmit = (values) => {
    console.log(values);
  };

  const validate = makeValidate(schema);

  return (
    <Grid container justify="center">
      <Grid item md={4}>
        <Card>
          <CardContent>
            <Box display="flex" flexDirection="column">
              <Typography align="center" variant="h4">
                Login
              </Typography>
              <Form
                onSubmit={onSubmit}
                validate={validate}
                render={({ handleSubmit }) => (
                  <form onSubmit={handleSubmit} noValidate>
                    <TextField
                      label="E-mail"
                      type="email"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="email"
                    />
                    <TextField
                      name="password"
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
                      <Button type="submit" variant="contained" color="primary">
                        Send
                      </Button>
                    </Box>
                  </form>
                )}
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default App;
