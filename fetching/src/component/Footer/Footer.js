import React from 'react';


const Footer = (props) => {

    return (
        <div>
            <div className="count">{props.lists.length} Tareas Restantes</div>
        </div>
    )
}


export default Footer