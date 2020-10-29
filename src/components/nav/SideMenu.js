import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Grow } from '@material-ui/core';
import colors from '../../utils/color';
import { getImages } from '../../utils/ImageApi';

const useStyles = makeStyles((theme) => ({
	drawer: {
		width: '350px',
	},
	menu: {
		marginTop: theme.spacing(1),
		display: 'flex',
		justifyContent: 'space-around',
	},
	optionContainer: {
		marginTop: theme.spacing(1),
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
	},
	box: {
		width: '45%',
		height: '90px',
		backgroundColor: 'blue',
		borderRadius: '9px',
		marginBottom: theme.spacing(1),
	},
}));

export default function SideMenu({
	setOpenSideMenu,
	openSideMenu,
	setBackgroundImage,
}) {
	const classes = useStyles();
	const [openOptionColor, setOpenOptionColor] = useState(false);
	const [openOptionImage, setOpenOptionImage] = useState(false);
	const [images, setImages] = useState([]);

	const getListOfImages = async () => {
		const listOfIMages = await getImages();
		console.log(listOfIMages);
		setImages(listOfIMages);
	};

	useEffect(() => {
		getListOfImages();
	}, []);
	return (
		<div>
			<Drawer
				open={openSideMenu}
				anchor='right'
				onClose={() => setOpenSideMenu(false)}>
				<div className={classes.drawer}>
					<div className={classes.menu}>
						<div
							className={classes.box}
							style={{
								backgroundImage:
									'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSMqguAeecarLzHRr6Bo_YpGX0KClPRQvaPNQ&usqp=CAU)',
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'cover',
							}}
							onClick={() => setOpenOptionImage(true)}></div>
						<div
							className={classes.box}
							style={{
								backgroundImage:
									'url(https://miuc.org/wp-content/uploads/2018/02/How-can-colours-help-you-in-your-everyday-life.jpg)',
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'cover',
							}}
							onClick={() => {
								setOpenOptionColor(true);
								setOpenOptionImage(false);
							}}></div>
					</div>
					{openOptionImage ? (
						<Grow in={openOptionImage}>
							<div className={classes.optionContainer}>
								{images.map((image, index) => {
									return (
										<div
											key={index}
											className={classes.box}
											style={{
												backgroundImage: `url(${image.thumb})`,
												backgroundRepeat: 'no-repeat',
												backgroundSize: 'cover',
											}}
											onClick={() => setBackgroundImage(image.url)}></div>
									);
								})}
							</div>
						</Grow>
					) : (
						<Grow in={openOptionColor}>
							<div className={classes.optionContainer}>
								{colors.map((color, index) => {
									return (
										<div
											key={index}
											className={classes.box}
											style={{
												backgroundColor: color,
											}}
											onClick={() => setBackgroundImage(color)}></div>
									);
								})}
							</div>
						</Grow>
					)}
				</div>
			</Drawer>
		</div>
	);
}
