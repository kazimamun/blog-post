import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

const SinglePost = () => {
    const classes = useStyles();
    const {postId} = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res=>res.json())
        .then(data => setPost(data))
    },[])
    return (
        <>
           <div className={classes.root}>
           <Typography variant="h4" gutterBottom>
                {post.title}
            </Typography>
            <Typography variant="body2" gutterBottom>
                {post.body}
            </Typography>
           </div>
            <Comments 
                comments={comments} 
                setComments={setComments} 
                postId={postId}
            />
        </>
    );
};

export default SinglePost;