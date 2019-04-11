import React, { Component } from 'react';
import DeleteTask from './DeleteTask'

const OneTask = (props) => {
    return (
        <div>
            <li>{props.value}</li>
            <DeleteTask idx={props.idx} removeTheTask={props.removeTheTask} />
        </div>
    )
}

export default OneTask;