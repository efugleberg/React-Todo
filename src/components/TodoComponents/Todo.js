import React from 'react';

const Todo = props => {
    return (
        <div className='todoListItem'>
            <p>{props.item.task}</p>
        </div>
    )
}

export default Todo;