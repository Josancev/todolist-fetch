import React from 'react';

const TaskList = (props) => {
    
    
        const ListComponent = props.lists.map((ls, index) => {
        return <li key={index}>{ls.label}<span><i className="fas fa-times" onClick={() => props.deletLi(index)} ></i></span></li>;
    });

    return (
        <div>
            <div className="result">
                <ul>
                  {ListComponent.reverse()}
                </ul>
            </div>
        </div>
    )
}

export default TaskList