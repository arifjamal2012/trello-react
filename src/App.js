import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Wrapper from './components/wrapper';
import Navigation from './components/nav/Navigation';

const useStyles = makeStyles((theme) => ({}));

export default function App() {
	const classes = useStyles();
	const [backgroundImage, setBackgroundImage] = useState('green');
	return (
		<div
			className={classes.root}
			style={{
				backgroundColor: backgroundImage,
				backgroundImage: `url(${backgroundImage})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
			}}>
			<Navigation setBackgroundImage={setBackgroundImage} />
			<Wrapper />
		</div>
	);
}
