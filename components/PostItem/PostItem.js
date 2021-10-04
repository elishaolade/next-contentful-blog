import React from 'react';

const PostItem = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default PostItem;