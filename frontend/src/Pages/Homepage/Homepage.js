import React from 'react';
import Header from "../../Components/Header/Header";
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import './Homepage.css';

import food_overview from "../../images/food_overview.jpg";
import chinese_food from "../../images/chinesefood_overview.jpg";
import the_eight_foods from "../../images/the_eight_foods.jpg";
import eight_type from "../../images/eight_types.jpeg";
import feeder from "../../images/feeder.png";
import delivery_guy from "../../images/delivery_guy.jpg";
import local from "../../images/local.png";
import stomach from "../../images/chinese_stomach.jpg";

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
        width: '300px',
        jwidth: '640px',
        height: '40px',
        margin: '0 auto',
        padding: '10px',
        position: 'relative',
        borderRadius: "25px",

    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,

    },
}));

const desc = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    header: {
        textAlign: "center",
        marginTop: "0.3em",
        fontFamily: "Inknut Antiqua",

    },
    title: {
        textAlign: "center",
    },
    paper: {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
    },
    description: {
        textAlign: "center",
    },
}));

const gridSection = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

}));

export default function Homepage() {

    const classes = useStyles();
    const classQ = Styles();
    const classG = gridSection();
    const classD = desc();
    return (
        <div>
            <Header />
            {/* Background Image section */}
            <div className={classes.root}>
                <div >
                    <Typography className={classes.center}>
                        Varieties Delectable Food Just For You <br></br>Check Your Address Coverage
                    </Typography>

                    {/* The search bar subsection */}
                    <Paper component="form" className={classQ.root}>
                        <IconButton type="submit" className={classQ.iconButton} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <InputBase className={classQ.input} placeholder="ZipCode" id="inputZip" />
                    </Paper>
                    {/* End of Search bar subsection */}
                </div>
                <CssBaseline />
            </div>
            {/* End of Background Image Section */}

            {/* <img src={feeder} alt="food"></img> */}

            {/* Feedi Description */}
            <div className={classD.root}>
                <CssBaseline />
                <Container maxWidth="xl" disableGutters>
                    <Typography variant="h3" className={classD.header}>What is Feedi?</Typography>
                    <hr></hr>

                    <Grid container>
                        <Grid item xs={12} sm={4}>
                            <img className={classD.paper} src={local} height="230" width="330" alt="food"></img>
                            <Typography className={classD.title}>Local Chinese Restaurant</Typography>
                            <Typography className={classD.description}>What's up</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <img className={classD.paper} src={stomach} height="230" width="330" alt="food"></img>
                            <Typography className={classD.title}>Chinese Stomach</Typography>
                            <Typography className={classD.description}>What's up</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <img className={classD.paper} src={the_eight_foods} height="230" width="330" alt="food"></img>
                            <Typography className={classD.title}>Browsing Eight Major Chinese Cuisines</Typography>
                            <Typography className={classD.description}>What's up</Typography>
                        </Grid>

                    </Grid>
                </Container>
            </div>


            {/* Starting the Grid Layout */}
            {/* <div className={classG.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classG.paper}>xs=12</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classG.paper}>xs=6</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classG.paper}>xs=6</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classG.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classG.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classG.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classG.paper}>xs=3</Paper>
                    </Grid>
                </Grid>
            </div> */}
            {/* End of the Grid Layout */}

        </div >
    )
}