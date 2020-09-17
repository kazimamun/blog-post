import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));   

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data =>setPosts(data))
    },[])
     
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {
                    posts.map(post =>{
                        return(
                            <Grid item xs={12} sm={6}>
                                <Paper className={classes.paper}>
                                    <p>{post.title}</p>
                                    <Link to={`/post/${post.id}`}><Button>Read More</Button></Link>
                                </Paper>
                            </Grid>
                        )
                    })
                }
            </Grid>            
        </div>
    );
};



export default Posts;