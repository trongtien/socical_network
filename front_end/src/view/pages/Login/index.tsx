import React from "react";
import { Switch, Route } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core/styles';

import { AuthencationRouter } from './../../../App/navigations';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh',
	},
	image: {
		backgroundImage: 'url(https://source.unsplash.com/random)',
		backgroundRepeat: 'no-repeat',
		backgroundColor:
			theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		position:'relative'
	}
}));

const Login: React.FunctionComponent = () => {
	const classes = useStyles();
	
	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<Grid item xs={false} sm={4} md={7} className={classes.image} />

			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<Switch>
					{
						AuthencationRouter.map((router, index)=>{
							const routerComponent = router.component;
							if (!routerComponent) return null;
							return <Route
									key={index}
									exact={router.exact}
									path={router.path}
									component={routerComponent}                       
								/>
						})
					}
				</Switch>
			</Grid>
		</Grid>
	);
}

export default Login;
