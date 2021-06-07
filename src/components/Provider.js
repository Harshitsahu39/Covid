import React, {createContext, useState, useContext} from 'react'
import getData, {deleteDetail, getDetail, editApi} from './Api'
import { useHistory, } from "react-router-dom";

const DataContext = createContext()
export const useData = () => useContext(DataContext)

export default function Provider({ children }) {
 
  const [data, setData] = useState([])
  const [detail , setDetail] = useState([])

  const showData = () =>{
            getData().then(res=>{
                console.log(res)
            setData(res.data)
})
}

      const deleteUser = id => {
        deleteDetail(id).then(
            res=>{
                console.log(res)
                alert('successfully deleted')
            }
        )
         // getDetails();
       };
 
const details = id=>{
    getDetail(id)
    .then(
        res=>{
            // console.clear()
            // console.log(res)
            // setDetail(res.data)
            return res.data
            console.log(detail)
        }

    )
}
const editDetails = (id , user)=>{
    editApi(id,user).then(
        res=>{
            console.log(res)
            alert('submitted')
            useHistory.push('/data')
        }
    )

}
  return (
      <DataContext.Provider value={{ showData, data, deleteUser, 
      details , detail,editDetails}}>
          { children }
      </DataContext.Provider>
  )
}