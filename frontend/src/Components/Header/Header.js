import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import PersonIcon from '@material-ui/icons/Person';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    header: {
        backgroundColor: "#512da8",
        color: "white",
    },
    menuButton: {
        marginRight: theme.spacing(2),
        "&:hover": {
            color: "white",
            backgroundColor: "#5e35b1",
            textDecoration: "none"

        }
    },
    submenu: {
        textTransform: 'capitalize',
        fontFamily: "Inknut Antiqua",
        color: "#ffffff",
        "&:hover": {
            color: "white",
            backgroundColor: "#5e35b1",
            textDecoration: "none"

        }
    },
    title: {
        flexGrow: 1,
        fontFamily: "Inknut Antiqua",
    },
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <AppBar position="static" className={classes.header}>

                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" href="/">
                        <Typography variant="h6" className={classes.title}>
                            <RestaurantIcon /> Feedi
                        </Typography>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                    </Typography>

                    <div>
                        <Button className={classes.submenu} href="/browse" size="medium" startIcon={<RestaurantMenuIcon />}>Restaurant NearBy</Button>
                        <Button className={classes.submenu} href="/login" size="medium" startIcon={<PersonIcon />}>Login / Sign Up</Button>
                    </div>

                </Toolbar>
            </AppBar>
        </div>
    );
}
