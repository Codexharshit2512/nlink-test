import React from "react";
import next from "../assets/img/next.svg";
// import * as ReactBootStrap from "react-bootstrap";
import {Link} from "react-router-dom";
import services from "../api/services";

function LoginForm(props) {
    return (
        <>
        <div className="container d-flex align-items-center justify-content-center mt-4">
            <div className="col-12 col-md-8 col-lg-6">
                <card>
                    <div>
                        <h2 className="text-center mb-4">Sign Up</h2>
                        <form>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>  
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Stay logged in</label>
                            </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </card>
            </div>
        </div>
        </>
    )
        
}


export default LoginForm