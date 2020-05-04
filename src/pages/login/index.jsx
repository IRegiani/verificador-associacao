import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
// import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import { useHistory } from 'react-router-dom';

import { useStyles, styles } from './style';
import Logo from './dceLogo.png';
import googleIcon from './googleIcon.svg';

// TODO: check form
const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright © '}
    <Link color="inherit" href="https://pt-br.facebook.com/dcecf/">
      DCE FACAMP
    </Link>
    {' '}
    {new Date().getFullYear()}
    .
  </Typography>
);

const svgIcon = (
  <Icon>
    <img src={googleIcon} alt="googleIcon" />
  </Icon>
);

const Login = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image2}>
        <div style={styles.logo(Logo)} />
        {/* <img src={googleIcon} alt="googleIcon" /> */}
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {/* <form className={classes.form} noValidate> */}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Entrar
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.GoogleLogin}
            startIcon={svgIcon}
          >
            Entrar com Google
          </Button>
          <Grid container>
            <Grid item xs>
              <Button color="primary" onClick={() => console.log('Open reset password modal')}>
                Esqueceu a senha?
              </Button>
            </Grid>
            <Grid item>
              <Button color="primary" onClick={() => { console.log('Redirect to sign up page'); history.push('/home'); }}>
                Não tem acesso? Cadastre-se
              </Button>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Copyright />
          </Box>
          {/* </form> */}
        </div>
      </Grid>
    </Grid>
  );
};

export default Login;
