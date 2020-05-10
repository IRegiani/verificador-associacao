import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === theme.palette.grey[50],
    // theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  image2: {
    alignSelf: 'center',
    height: '100%',
    display: 'flex',
    backgroundImage: 'linear-gradient(to bottom right, white, white, rgb(242,186,0.1), rgba(217,147,5,1))',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  GoogleLogin: {
    backgroundColor: '#ea4335', // TODO: add this to constant file
    '&:hover': {
      backgroundColor: '#ea4335',
    },
  },
}));

const styles = {
  logo: (image) => ({
    background: `url(${image}) no-repeat center center`,
    height: '470px',
    width: '100%',
    backgroundSize: 'contain',
    alignSelf: 'center',
  }),
  lock: {
    color: 'rgba(217,147,5,1)',
  },
};

export {
  useStyles,
  styles,
};
