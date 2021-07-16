import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

import chinese_food from "../../images/homepage/chinesefood_overview.jpg";
import the_eight_foods from "../../images/homepage/the_eight_foods.jpg";
import delivery_guy from "../../images/homepage/delivery_guy.jpg";
import partner from "../../images/homepage/partner.jpg";
import local from "../../images/homepage/local.png";
import stomach from "../../images/homepage/chinese_stomach.jpg";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import './Homepage.css';

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
        fontFamily: "Inknut Antiqua",
        color: "#ba68c8",
        fontSize: "120%",
    },
    paper: {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
    },
    description: {
        textAlign: "center",
        padding: "20px",
        fontFamily: "Nuito",
    },
    spanning: {
        color: "red",
    },
}));

const gridSection = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },
    paper: {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
    },
    title: {
        textAlign: "center",
        color: "#7b1fa2",
        fontFamily: "Inknut Antiqua",
        fontSize: "185%",
        lineHeight: "290px",
        height: "200px",

    },
    subsection: {
        marginTop: "2.5em",
        padding: "10px",

    },
    body: {
        textAlign: "center",
        paddingLeft: "150px",
        paddingRight: "150px",
        fontFamily: "Nunito",
    },
    join: {
        backgroundColor: "#4a148c",
        textTransform: 'capitalize',
        fontFamily: "Inknut Antiqua",
        color: "#ffffff",
        width: "200px",
        height: "40px",
        marginTop: "2em",

    }

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
                            <Typography className={classD.description}><span className={classD.spanning}>Feedi</span> is targeting overseas Chinese and non-Chinese, we help you to discover all the possible local Chinese restaurants nearby, up to eight major cuisines.
                                However, most Chinese people are unable to visit their local famous Chinese restaurant.
                                Feedi offers food delivery service to help you enjoy Chinese food in your busy schedule.</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <img className={classD.paper} src={stomach} height="230" width="330" alt="food"></img>
                            <Typography className={classD.title}>Chinese Stomach</Typography>
                            <Typography className={classD.description}>Chinese who study abroad, family immigrants, travelers,
                                and business people all have "Chinese Stomach", which is a passion in Chinese food. <br></br>
                                If you are a restaurant business owner and would like to share your delicious cuisines with more Chinese and Non-Chinese,
                                we are encouraging you to be <span className={classD.spanning}>Feedi's</span> partner. So that...
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <img className={classD.paper} src={the_eight_foods} height="230" width="330" alt="food"></img>
                            <Typography className={classD.title}>Discovering Eight Major Chinese Cuisines</Typography>
                            <Typography className={classD.description}>China has eight world-famous cuisines. They are Sichuan Cuisine, Shandong Cuisine, Jiangsu Cuisine, Zhejiang Cuisine,
                                Guangdong/Cantonese Cuisine, Hunan Cuisine, Anhui Cuisine, and Fujian Cuisine.
                                <span className={classD.spanning}> Feedi</span> As a platform, we are committed to discovering more local Chinese restaurants based on your local area for overseas Chinese.
                                The purpose for us is to allow overseas Chinese to taste delicious Chinese food even when they leave their hometown and
                                allowed non-Chinese to understand and taste eight cuisines of Chinese food at the same time.</Typography>
                        </Grid>

                    </Grid>
                </Container>
            </div>


            {/* Starting the Grid Layout */}
            <div className={classG.root}>
                <Grid container>

                    <Grid item xs={12} sm={6} md={6} className={classG.subsection}>
                        <Typography className={classG.title} variant="h5">Become a Feeder</Typography>
                        <Typography variant="body1" className={classG.body}>The overall average patient rating of Liem P Bui is Great.
                            P Bui has been rated by 4 patients.From those 4 patients 0 of those left a comment along with
                            their rating.The overall rating for Liem P Bui is 4.0 of 5.0 stars.
                            <Button className={classG.join} variant="contained" href="/feeder" size="medium" startIcon={<AttachMoneyIcon />}>Feeder Signup</Button></Typography>

                    </Grid>
                    <Grid item xs={12} sm={6} md={6} className={classG.subsection}>
                        <img className={classG.paper} src={delivery_guy} height="430" width="600" alt="food"></img>

                    </Grid>

                    <Grid item xs={12} sm={6} md={6} className={classG.subsection}>
                        <img className={classG.paper} src={partner} height="430" width="600" alt="food"></img>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} className={classG.subsection}>
                        <Typography className={classG.title} variant="h5">Become a Partner</Typography>
                        <Typography variant="body1" className={classG.body}>The overall average patient rating of Liem P Bui is Great.
                            Liem P Bui has been rated by 4 patients.From those 4 patients 0 of those left a comment along with
                            their rating.The overall rating for Liem P Bui is 4.0 of 5.0 stars.
                            <Button className={classG.join} variant="contained" href="/partner" size="medium" startIcon={<AttachMoneyIcon />}>Partner Signup</Button></Typography>
                    </Grid>
                </Grid>
            </div>
            {/* End of the Grid Layout */}

            <Footer />
        </div >
    )
}