import axios from 'axios'

const getData =  () => {
    try {
        return  axios.get('https://jsonplaceholder.typicode.com/users')
    } catch (err) {
        console.error(err.message);
    }
    
};

export default getData

export const editApi = (id , user) => {
    try {
        console.log(id)
      return axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, user);
    } catch (err) {
        console.error(err.message);
    }
    
};


export const getDetail = (id) => {
    try {
        console.log(id)
         return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  
    } catch (err) {
        console.error(err.message);
    }
    
};

export const deleteDetail = (id) => {
    try {
        console.log(id)
         return axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      } catch (err) {
        console.error(err.message);
    }
    
};
