import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';

const SinglePost = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});
    const [comment, setComment] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>res.json())
        .then(data => setPost(data))
    },[])
    return (
        <div>
            post id is {post.id}
            <Comments comment={comment} setComment={setComment} id={id}/>
        </div>
    );
};

export default SinglePost;