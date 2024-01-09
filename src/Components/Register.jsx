import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProviders';

const Register = () => {
const {user , createUser} = useContext(AuthContext);
  console.log(createUser)
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(username, email, password );
        
        createUser(email, password)
        .then(result => {
          const loggedUser = result.user;
          console.log(loggedUser);
          form.reset();
        })
        .catch(error => {
          console.log(error)
        })
        
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register Here!</h1>
            
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister}className="card-body">
              <div className="form-control">
              <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input type="Text" placeholder="User Name" className="input input-bordered" name="username" required />
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" name="email" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <Link className="form-control mt-6" to ="/login"><button className="btn btn-link label-text-alt link link-hover">Already a member!</button></Link>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;