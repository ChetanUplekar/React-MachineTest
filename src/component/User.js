import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class User extends Component {
    constructor(props){
        super(props);
        this.state={
            username:"user_01",
            password:"*********",
        }
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
                            <p>Password : {password}</p>
                            <span>
                                <Link className="text-light btn btn-primary" to ="/reset">Reset Password</Link>
                            </span>
                            <button className="btn btn-primary w-10" onClick={this.logout}>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
