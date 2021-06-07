import React, { useEffect, useState } from 'react'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import axios from 'axios'
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import NoteIcon from '@material-ui/icons/Note';
import { Link } from "react-router-dom";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
    main_container:{
        width: '100%',
        height: '100%',
        backgroundColor: '#b1c4c9'
    },
    header: {
        position: 'fixed',
        width: '100%',
        background: 'blue',
        height: '5%',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        justifyItems: 'center'

    },
    header_heading_left: {
        display: 'inline',
        float: 'left',
        marginLeft: '1%'

    },
    header_heading_right: {
        display: 'inline',
        float: 'right',
        marginRight: '1%',
        color:'white'

    },
    container: {
        maxWidth: '70%',
        height: 'auto',
        paddingTop: '5%'
    },
    container_heading: {
        textAlign: 'center'
    },
    container_right: {
        float: 'right'
    },
    detalis_grid: {
        backgroundColor: 'white',
        border: 'solid'
    },
    container_grid: {
        backgroundColor: 'white',
    },
    card_heading: {
        textAlign: 'center',
        color: 'white',
        padding: '2%'
    },
    card_body: {
        textAlign: 'center',
        padding: '0 0% 2% 0%',
        fontWeight: 'bold',
    },
    loading:{
        textAlign:'center'
    }

})

export default function Home() {
    const classes = useStyles();
    const [data, setData] = useState([])
    const [loading , setLoading] = useState(true)
    //     const getData = async () => {
    //     try {
    //     const userData = await axios.get("https://api.covid19india.org/v4/min/data.min.json")
    //     console.log(userData.data.MP.districts.Indore)
    //     setData(userData.data.MP.districts.Indore);  // set State

    //   } catch (err) {
    //     console.error(err.message);
    //   }
    // };


    useEffect(() => {
        axios.get("https://api.covid19india.org/v4/min/data.min.json")
            .then(res => {
                setData(res.data.MP.districts.Indore);
                setLoading(false)
            })
            .catch(err => {
                console.log(err.message)
            })
    }, [])
    if(loading){return<h1 className={classes.loading}>Loading...</h1>}
    return (
        <>
            <section className={classes.main_container}>
                <Box className={classes.header}>
                    <div className={classes.header_heading_left}>INDORE</div>
                    <Link to='/data' className={classes.header_heading_right} >About
                    </Link>
                </Box>
                <Container className={classes.container} style={{ backgroundImage: '#cfe8fc', height: '100vh' }}>
                    <Grid container >
                        <Grid item xs={12} className={classes.container_heading}>
                            <h1>Indore Covid Report</h1>
                            <p>Last Update on {data.meta.tested.last_updated ? data.meta.tested.last_updated:0}</p>
                        </Grid   >
                    </Grid   >
                    <Grid container spacing={1} >
                        <Grid item xs={6} >
                            <Grid item className={classes.container_grid}>
                                <h3 className={classes.card_heading} style={{ backgroundColor: 'orange' }}>Testing Done</h3>
                                <div className={classes.card_body}>
                                    <NoteIcon style={{ color: 'orange' }} />
                                    <p>{data.total.tested}</p>
                                </div>
                            </Grid>
                        </Grid>


                        <Grid item xs={6} >
                            <Grid item className={classes.container_grid}>
                                <h3 className={classes.card_heading} style={{ backgroundColor: '#abb4ed' }}>Vaccinated</h3>
                                <div className={classes.card_body}>
                                    <DoneAllIcon style={{ color: '#abb4ed' }} />
                                    <p>{data.total.vaccinated}</p>
                                </div>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid container spacing={1} >
                        <Grid item xs={4} >
                            <Grid item className={classes.container_grid}>
                                <h3 className={classes.card_heading} style={{ backgroundColor: 'red' }}>Confirmed</h3>
                                <div className={classes.card_body}>
                                    <AddOutlinedIcon style={{ color: 'red' }} />
                                    <p>{data.total.confirmed}</p>
                                </div>
                            </Grid>
                        </Grid>


                        <Grid item xs={4} >
                            <Grid item className={classes.container_grid}>
                                <h3 className={classes.card_heading} style={{ backgroundColor: 'green' }}>Recovered</h3>
                                <div className={classes.card_body}>
                                    <FavoriteBorderIcon style={{ color: 'red' }} />
                                    <p>{data.total.recovered}</p>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid item xs={4} >
                            <Grid item className={classes.container_grid}>
                                <h3 className={classes.card_heading} style={{ backgroundColor: '#a19c06' }}>Deceased</h3>
                                <div className={classes.card_body}>
                                    <TrendingDownIcon style={{ color: '#a19c06' }} />
                                    <p>{data.total.deceased}</p>
                                </div>
                            </Grid>
                        </Grid>

                    </Grid>

                </Container>
            </section>
        </>
    )
}
