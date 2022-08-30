import React from 'react';
import $ from "jquery";
import axios from 'axios';

const AllCommentsMessage = ({ isOpen, postId }) => {

    return (
        <div className='messgeComments' style={{ display: isOpen === true ? 'flex' : 'none' }}>
            {JSON.stringify(postId)}
        </div>
    )
}

export default AllCommentsMessage;