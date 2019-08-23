import React from 'react';
import './user.css';


const Imputuser = (props) => {
    return (
        <form onSubmit={props.handleUser} >
            <input className="inputUser"  onChange={props.newUserChanged} placeholder="Usuario"  value={props.newUser} autoComplete="off"  />
        </form>
    )
}

export default Imputuser;