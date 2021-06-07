import React, { Component } from 'react'
import { editApi, getDetail } from './Api';
import '../App.css'



export default class EditUser extends Component  {
   
    
    constructor(props) {
        super(props)
        this.state = {
             name:'',
             username:'',
             email:''
        }
    }
    onSubmit = async e => {
        e.preventDefault();
        const obj = {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email
        }
        editApi(this.props.match.params.id,obj).then(
            res=>{
                console.log(res)
                alert('submitted')
                this.props.history.push('/data')
            }
            )
            
            // await axios.put(`https://jsonplaceholder.typicode.com/users/${props.id}`, user);
            // useHistory.push("/");
        };
        async componentDidMount(){
          
            await getDetail(this.props.match.params.id).then(
                response=>{
                this.setState({
                    name: response.data.name,
                    username: response.data.username,
                    email: response.data.email
                  })
            }
        )
    }
    onChangeHandler = e => {
        this.setState({[e.target.name]: e.target.value });
    };
    render() {
        const{name , username , email} =this.state
        return (
            <div  className="Main-container">
                <div className="Inner">
                            
                            Details Form</div>
                
                 <form onSubmit={e => this.onSubmit(e)}>
                    <div >
                    <label className="Label" > Name </label>
                        <input className="Field"
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={name}
                            onChange={e => this.onChangeHandler(e)}
                        />
                    </div>
                    <div >
                    <label className="Label" > Username </label>
                        <input className="Field"
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={username}
                            onChange={e => this.onChangeHandler(e)}
                        />
                    </div>
                    <div >
                    <label className="Label" > Email</label>
                        <input className="Field"
                            type="email"
                            placeholder="E-mail"
                            name="email"
                            value={email}
                            onChange={e => this.onChangeHandler(e)}
                        />
                    </div>

                    <button className="Btn">Update User</button>
                </form>

                
            </div>
        )
    }
}
