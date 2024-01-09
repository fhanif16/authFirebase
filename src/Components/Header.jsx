import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProviders';

const Header = () => {
  const {user , logOut} = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
    .then(() => {

    })
    .catch(error => console.log(error))


  }
    return (
        <div>
   
<div className="navbar bg-primary text-primary-content">
  <button className="btn btn-ghost text-xl">Auth Master</button>
  <Link className="btn btn-ghost text-xl" to='/'>Home</Link>
<Link className="btn btn-ghost text-xl"to ="/login">Login</Link>
<Link className="btn btn-ghost text-xl"to="/register">Register</Link>
<Link className="btn btn-ghost text-xl"to="/order">Order</Link>
<Link className="btn btn-ghost text-xl"to="/profile">Profile</Link>
{
  user ? <div>
    <span>{user.email}</span> 
     <span><button onClick={handleLogout} className="btn btn-ghost text-xl"> Sign Out</button></span>
    </div>
    :
    < Link className="btn btn-ghost text-xl" to='/login'></Link>
}
</div>



        </div>
    );
};

export default Header;