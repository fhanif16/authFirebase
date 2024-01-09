import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthProviders, { AuthContext } from '../Provider/AuthProviders';

const Login = () => {
  const {signIn , signInWithGoole} = useContext(AuthContext)

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email , password)
        signIn(email , password)
        .then(result => {
          const logger = result.user;
          console.log(logger)
          form.reset();

        })
        .catch( error => {
          console.log(error)
        })

       

    }


    const handleGoogleLogin = () => {
      signInWithGoole()
      .then(result => {
        const logger = result.user;
        console.log(logger)
      })
      .catch((error) => {
        console.log(error)
      })

    }
    return (
        
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login Here!</h1>
      
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin}className="card-body">
        <div className="form-control">
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
          <button className="btn btn-primary">Login</button>
        </div>
        <div className="form-control mt-6">
          <button onClick={handleGoogleLogin}className="btn btn-primary">Google SignIn</button>
        </div>
        <Link className="form-control mt-6" to ="/register"><button className="btn btn-link label-text-alt link link-hover">New to Auth masters</button></Link>
      </form>
     
    </div>
  </div>
</div>
        
    );
};

export default Login;