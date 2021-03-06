import React from 'react';



const Menu = (props) => {
    return (
        <div className="user">
            <div>
                <strong className="change" onClick={props.handleToggle}>Cambiar Usuario</strong>
            </div>
            <div>
                <p className="parrafo">Usuario: <strong>{props.User}</strong></p>
            </div>
            <div>
                <strong className="alert" onClick={props.deleteUser}>Eliminar Usuario</strong>
            </div>

        </div>
    )
}

export default Menu;