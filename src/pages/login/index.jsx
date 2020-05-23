import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import ErrorOutlineOutlined from '@material-ui/icons/ErrorOutlineOutlined';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

import { requestLoginAction } from '../../state/actions';
import { loginErrorSelector } from '../../state/selectors';

import { useStyles, styles } from './style';
import Logo from '../../static/dceLogo.png';
import googleIcon from '../../static/googleIcon.svg';

export const Copyright = () => (
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
  const dispatch = useDispatch();
  const hasLoginError = useSelector(loginErrorSelector);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [rememberOption, setRememberOption] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const onEmailChange = (evt) => setEmail(evt.target.value);
  const onPasswordChange = (evt) => setPassword(evt.target.value);
  const onCheckBoxCheck = (evt) => setRememberOption(evt.target.checked);
  const onClick = (evt) => (evt.target.name === 'email' ? setEmailError(false) : setPasswordError(false));
  const onSubmitClick = () => {
    console.log('email', /\S+@\S+\.\S+/.test(email));
    const isEmailValid = /\S+@\S+\.\S+/.test(email);
    if (!isEmailValid) setEmailError(true);
    if (!password) setPasswordError(true);
    if (password && email && isEmailValid) dispatch(requestLoginAction(email, password, rememberOption));
  };
  const onPasswordKeyPress = (evt) => (evt.key === 'Enter' ? onSubmitClick() : null);

  useEffect(() => {
    if (hasLoginError) {
      setEmailError(true);
      setPasswordError(true);
    }
  }, [hasLoginError]);

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image2}>
        <div style={styles.logo(Logo)} />
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Entrar
          </Typography>
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
            error={emailError}
            onChange={onEmailChange}
            onClick={onClick}
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
            error={passwordError}
            onChange={onPasswordChange}
            onClick={onClick}
            onKeyPress={onPasswordKeyPress}
          />
          <div>
            <Checkbox value="remember" color="primary" onChange={onCheckBoxCheck} />
            Guardar sessão
          </div>
          {hasLoginError && (
            <div className={classes.errorContainer}>
              <ErrorOutlineOutlined className={classes.error} />
              Erro de email ou senha ao entrar
            </div>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={onSubmitClick}
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
              <Button color="primary" id="forgotPasswordButton" onClick={() => console.log('Open reset password modal')}>
                Esqueceu a senha?
              </Button>
            </Grid>
            <Grid item>
              {/* history push arg is just for test, should redirect */}
              <Button color="primary" id="signUpButton" onClick={() => { console.log('Redirect to sign up page'); history.push('/home'); }}>
                Não tem acesso? Cadastre-se
              </Button>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Copyright />
          </Box>
        </div>
      </Grid>
    </Grid>
  );
};

export default Login;
