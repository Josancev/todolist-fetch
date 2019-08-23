import React from 'react';


const LogUser = (props) => {
    return (
        <form onSubmit={props.handleUser} >
            <input className="inputUser"  onChange={props.newUserChanged} placeholder="Usuario"  value={props.newUser} autoComplete="off"  />
        </form>
    )
}

export default LogUser;