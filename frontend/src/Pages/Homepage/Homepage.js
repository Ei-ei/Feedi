import React from 'react';
import Header from "../../Components/Header/Header";
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import './Homepage.css';

import food_overview from "../../images/food_overview.jpg";
import chinese_food from "../../images/chinesefood_overview.jpg";
import the_eight_foods from "../../images/the_eight_foods.jpg";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '755px',
        background: `rgba(0, 0, 0, 0.3) url(${chinese_food})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        backgroundBlendMode: "darken",
    },
    center: {
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        height: "82vh",
        fontSize: "220%",
        fontFamily: 'Otomanopee One',
    },
    inputField: {
        marginTop: "-34vh",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontFamily: 'Otomanopee One',
    },


}));

const Styles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginTop: "-34vh",
        alignItems: 'center',
        width: '200px',
        jwidth: '640px', /* Can be in percentage also. */
        height: '40px',
        margin: '0 auto',
        padding: '10px',
        position: 'relative',

    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
}));

export default function Homepage() {

    const classes = useStyles();
    const classQ = Styles();
    return (
        <div>
            <Header />
            {/* Background Image section */}
            <div className={classes.root}>
                <div >
                    <Typography className={classes.center}>
                        Varieties Delectable Food Just For You, <br></br>Check Your Address Coverage
                    </Typography>


                    <Paper component="form" className={classQ.root}>
                        <IconButton type="submit" className={classQ.iconButton} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <InputBase className={classQ.input} placeholder="ZipCode" id="inputZip" />
                    </Paper>
                </div>


                <CssBaseline />
            </div>
            {/* <img src={the_eight_foods} alt="food"></img> */}


            <h6>This is homepage</h6>

        </div >
    )
}