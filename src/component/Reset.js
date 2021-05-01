import React, { Component } from 'react'
import User from './User'
import {Link} from 'react-router-dom'

export default class Reset extends Component {
    constructor(props){
        super(props);
        this.state={
            username:"user_01",
            password:"",
        }
    }
    Ontype=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    logout=()=>{
        window.location.href = "/logout";
    }
    render() {
        const {username, password} = this.state
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card p-4 text-left">
                            <h3 className="text-center mb-4">User</h3>
                            <p>Username : {username}</p>
                            <p>Password : <input type="password" className="form-control" name="password" value={password} onInput={this.Ontype}></input></p>
                            <span>
                                <Link className="text-light btn btn-primary" to ="/user">Save Password</Link>
                            </span>
                            <button className="btn btn-primary w-10" onClick={this.logout}>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
