import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import {getDetail} from "./Api";
import { useData } from './Provider';
import '../App.css'

export default function Details() {
    const { id } = useParams();
    const {details , detail , editDetails} = useData()
    // const person = detail
    const [personDetail, setPersonDetail] = useState({
        name:'',
        username:'',
        email:''
    })
    
    useEffect(()=>{
        details(id).then(res=>{
            setPersonDetail({[name]:res.data.name})
            setPersonDetail({[username]:res.data.username})
            setPersonDetail({[email]:res.data.email})

        })
        // getUser()
        // details(id)
        // setPersonDetail(person)
        // console.log(person)
        
        // .then(res=>{
        //     // setPersonDetail(res.data)
            // setPersonDetail({[name]:res.data.name})
            // setPersonDetail({[username]:res.data.username})
            // setPersonDetail({[email]:res.data.email})
        //     console.log(personDetail)
            

        // })
        // console.log(details)
       
        // getDetail(id).then(
        //     res=>{
        //         console.clear()
        //         console.log(res)
        //         setData(res.data)
        //     }
        // )
        
        console.log(personDetail)
    },[])
    // const getUser=async()=>{
    //     await details(id)
    //     await detail
    //     setPersonDetail(detail)
    // }
    const onChangeHandler = e => {
        setPersonDetail({[e.target.name]: e.target.value });
    };
    const onSubmit = (e)=>{
        console.log('submit')
        editDetails(id,personDetail)
    }
    const {name , username, email} = personDetail
    // if(!personDetail.name){
    //     return <h1> LOADING</h1>
    // }
    return (
        
        <div  className="Main-container">
                <div className="Inner">
                            
                            Details Form</div>
                
                 <form onSubmit={e => onSubmit(e)}>
                    <div >
                    <label className="Label" > Name </label>
                        <input className="Field"
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={name}
                            onChange={e => onChangeHandler(e)}
                        />
                    </div>
                    <div >
                    <label className="Label" > Username </label>
                        <input className="Field"
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={username}
                            onChange={e => onChangeHandler(e)}
                        />
                    </div>
                    <div >
                    <label className="Label" > Email</label>
                        <input className="Field"
                            type="email"
                            placeholder="E-mail"
                            name="email"
                            value={email}
                            onChange={e => onChangeHandler(e)}
                        />
                    </div>

                    <button className="Btn">Update User</button>
                </form>

                
            </div>
    )
}