import React, { Component } from 'react';

const DeleteTask = (props) => {

    const handleFormSubmit = (e) => {
        e.preventDefault();
        props.removeTheTask(props.idx);
        console.log(props.idx)
    }

    return (
        <div>
            {/* <form onSubmit={handleFormSubmit}>
                <input type='submit' value='Done' />
            </form> */}
            <button type='submit' onClick={(e) => { handleFormSubmit(e) }} >Done</button>

        </div>
    )
}

export default DeleteTask;