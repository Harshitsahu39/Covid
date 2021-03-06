import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import axios from 'axios'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from "@material-ui/core/TablePagination";
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import getData, { deleteDetail } from './Api';
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useData } from './Provider';

import EditUser from './EditUser';



const useStyles = makeStyles({
    header: {
        width: '100%',
        textAlign: 'center',
        
        

    },
    heading:{
        textAlign:'center',
        
    },
    body: {
        marginTop: '',
        
    },
    dataTable: {
        position: 'sticky',
        tableLayout: 'auto',
        
    },
    container: {
        maxWidth: '70%',
        height: 'auto',
        padding: '2% 0'
    },
    table: {
        width: '100%',
        justifyItems: 'center',


    },
    header: {
        textAlign: 'center',
        paddingBottom: '5px'
    },
    tableHeading: {
        fontWeight: 'bold',
    },
    editIcon:{
        color:'blue',
        marginRight:'2px'
      },
      delIcon:{
        color:' rgb(241, 35, 35)'
        
      },
      link:{
          textDecoration:'none'
      }
})

function Data() {
    // const [data, setData] = useState([])
    // const [loading , setLoading] = useState(true)
    // const [open, setOpen] = useState(false);
    const {showData , data , deleteUser } = useData()
    
    useEffect( () => {
        // const details = getData()
        // setData(details)
        // setLoading(false)
        // console.log(data.data)
        // axios.get('https://jsonplaceholder.typicode.com/users')
        //     .then(res => {
        //         setData(res.data);
        //         setLoading(false)
        //         console.log(res.data)
        //     })
        //     .catch(err => {
        //         console.log(err.message)
        //     })
        
        // const result = await getData()
        // console.log(result)
       
        // console.log(result)
        // setLoading(false)
    //    getData().then(res=>{
    //        setData(res.data)
    //    })
    showData()
    }, [])
    
    //      const getUsers = async () => {
    //     try {
    //     const userData = await axios.get("https://jsonplaceholder.typicode.com/users")
    //     console.log(userData.data)
    //     setData(userData.data);  // set State

    //   } catch (err) {
    //     console.error(err.message);
    //   }
    // };
    const handleDelete = id => {
       deleteUser(id)
    //    .then(
    //        res=>{
    //            console.log(res)
    //            alert('successfully deleted')
    //        }
    //    )
        // getDetails();
      };

    //   const editUser = id=> {
    //     const user =()=>EditUser(id)
    // }
    



    const classes = useStyles();
    if(!data){
        return<h1>Loading...</h1>
    }
    return (
        <Grid container >

            <AppBar position="static" className={classes.header} >
                <Typography variant="h6" color="inherit" textAlign='center'>
                    Header
                </Typography>

            </AppBar>
            <Container className={classes.container} >
            <Grid item >
                <Typography variant='h4' className={classes.heading} >
                    Table
                </Typography>
            </Grid>
            <Grid item className={classes.body} >
                <TableContainer component={Paper} sm>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow >

                                <TableCell className={classes.tableHeading} align="center">ID</TableCell>
                                <TableCell className={classes.tableHeading} align="center">Name</TableCell>
                                <TableCell className={classes.tableHeading} align="center">User Name</TableCell>
                                <TableCell className={classes.tableHeading} align="center">Email</TableCell>
                                <TableCell className={classes.tableHeading} align="center">Actions</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data
                                .map((data) => (
                                    <TableRow key={data.id}>
                                        <TableCell align="center">
                                            {data.id}

                                        </TableCell>

                                        <Link to={`/details/${data.id}`} className={classes.link}><TableCell align="center">{data.name}</TableCell></Link>
                                        <TableCell align="center">{data.username}</TableCell>
                                        <TableCell align="center">{data.email}</TableCell>
                                        <TableCell align="center">
                                            <Link to={`/edit/${data.id}`} className={classes.link} >{<EditIcon className={classes.editIcon}/>}</Link>
                                        {<DeleteIcon className={classes.delIcon} onClick={() => handleDelete(data.id)}/>}</TableCell>


                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                   
                </TableContainer>
            </Grid>
            

            </Container>
        </Grid>
    )
}

export default Data