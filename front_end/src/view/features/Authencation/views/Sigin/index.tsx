import React from 'react';
import {NavLink} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

import { TextFieldBase, ButtonBase } from '../../../../components';

const useStyles = makeStyles((theme) => ({
	image: {
		backgroundImage: 'url(https://source.unsplash.com/random)',
		backgroundRepeat: 'no-repeat',
		backgroundColor:
			theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
		backgroundSize: 'cover',
		backgroundPosition: 'center',
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
}));


const Sigin: React.FunctionComponent = () => {
    const classes = useStyles();

	return (
		<div className={classes.paper}>
			<Avatar className={classes.avatar}>
				<LockOutlinedIcon />
			</Avatar>
			
			<Typography 
				component="h1" 
				variant="h5">
				Sign in
			</Typography>

			<form className={classes.form} noValidate>
				<TextFieldBase
					variant="outlined"
					margin="normal"
					required
					fullWidth
					id="email"
					label="Email Address"
					name="email"
					autoComplete="email"
					autoFocus
					placeholder="asdsad"
				/>
				
				<TextFieldBase
					variant="outlined"
					margin="normal"
					required
					fullWidth
					name="password"
					label="Password"
					type="password"
					id="password"
					autoComplete="current-password"
				/>

				<FormControlLabel
					control={<Checkbox value="remember" color="primary" />}
					label="Remember me"
				/>

				<ButtonBase
					className={classes.submit}
					label="Sign In"
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
				/>

				<Grid container>
					<Grid item xs>
						<NavLink to="/login/forgot-password" >
							Forgot password?
						</NavLink >
					</Grid>
					<Grid item>
						<NavLink to="/login/register">
							{"Don't have an account? Sign Up"}
						</NavLink >
					</Grid>
				</Grid>

			</form>
		</div>
    )
}

export default Sigin;