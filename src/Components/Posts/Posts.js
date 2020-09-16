import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      margin: '0 auto',
      padding: 0
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
});     

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data =>setPosts(data))
    },[])
     
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <div>
            {
                posts.length && posts.map(post=>{
                    return(
                        <Card key={post.id} className={classes.root}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    {post.id}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {post.title}
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    {post.body}
                                </Typography>
                            </CardContent>
                            
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    )
                })
            }
            
        </div>
    );
};

export default Posts;