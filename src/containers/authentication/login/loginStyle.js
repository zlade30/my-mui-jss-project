import { makeStyles } from '@material-ui/core/styles'

export const loginStyle = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  leftPanel: {
    width: '50%',
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  rightPanel: {
    width: '50%',
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f8fc',
  },
  form: {
    padding: 40,
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    width: 450,
    margin: 10,
    height: 60,
  },
  button: {
    margin: 10,
    height: 60,
    borderRadius: 100,
  },
  title: {
    color: '#6e6e6e',
  },
  image: {
    width: 600,
    height: 600,
  },
}))
