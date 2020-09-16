import React, { useEffect } from 'react';

const Comments = (props) => {
    const {comment, setComment, id} = props;
    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res=>res.json())
        .then(data =>setComment(data))
    },[])
    return (
        <div>
            <h3>This is comments</h3>
            {comment.length}
        </div>
    );
};

export default Comments;