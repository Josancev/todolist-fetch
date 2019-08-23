import React from 'react';



const Task = (props) => {

    return (

        <form onSubmit={props.handleList} >
            <input  onChange={props.inpuListChanged} placeholder="Ingresa tarea a realizar"  value={props.inpuList} autoComplete="off"  />
        </form>
    )
}

export default Task;