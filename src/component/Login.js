import React, { useState } from "react";
import {Alert} from 'reactstrap'
const LoginUser = ({ User }) => {
  const [details, setDetails] = useState({ email: "", password: "" });

  const userlogin = (e) => {
    e.preventDefault();
    User(details);
  };
  return (
        
    <div>
      <Alert color="info">
        Login Details: <br></br>
        Username : user_01
        Password : user_01
      </Alert>
      <div className="container mt-5 card p-5">
        <h2 className="text-primary">Login</h2>
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="form-group">
                    <label>Username</label>
                    <input className="form-control" type="text" name="username" onChange={(e) => setDetails({ ...details, email: e.target.value })} value={details.email}/>
                </div>
                <div className="form-groups">
                    <label>Password</label>
                    <input className="form-control" type="Password" name="password" id="last-name"onChange={(e) =>setDetails({ ...details, password: e.target.value }) } value={details.password} />
                </div>
                <div className="text-center">
                    <button className="btn btn-primary mt-4" onClick={userlogin}>Login</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
