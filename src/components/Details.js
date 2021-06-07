import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import {getDetail} from "./Api";
import { useData } from './Provider';

export default function Details() {
    const { id } = useParams();
    const [data, setData] = useState([])
    const {details , detail} = useData()

    useEffect(()=>{
    //    const data =  details(id)
    //    console.log(data)
       getUsers()
        // getDetail(id).then(
        //     res=>{
        //         console.clear()
        //         console.log(res)
        //         setData(res.data)
        //     }
        // )
        
    },[])


    const getUsers = async () => {
        try {
        const datas = await details(id)
        console.log(datas)
        
        setData(datas);

      } catch (err) {
        console.error(err.message);
      }
    };
    const {name , username, email} = data
    return (
        
        <div>
            
            <h1>Hello {name} </h1>
            <div>
                <h3>User Id = {id}</h3>
                <h3>User Name = {username} </h3>
                <h3>Email = {email}</h3>
            </div>
        </div>
    )
}
