import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    header: {
        backgroundColor: "#ba68c8",
        color: "white",
        textAlign: "center",
    },
    submenu: {
        textTransform: 'capitalize',
        fontFamily: "Inknut Antiqua",
        color: "#ffffff",
        "&:hover": {
            color: "#bbdefb",
        }
    },
    tool: {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: "22px",

    },
    copyright: {
        fontSize: "90%",
        paddingTop: "10px",
        fontFamily: "Inknut Antiqua",
    }
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <AppBar position="static" className={classes.header}>

                <Toolbar className={classes.tool}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link className={classes.submenu} href="/about">
                            About Us
                        </Link>
                        <Link className={classes.submenu} href="/FAQ" >
                            Contact Us
                        </Link>
                        <Link className={classes.submenu} href="https://github.com/Ei-ei/Feedi" >
                            Github
                        </Link>

                    </Breadcrumbs>
                    <h6 className={classes.copyright}>© 2021 Feedi</h6>

                </Toolbar>

            </AppBar>
        </div>
    );
}
