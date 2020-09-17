import axios from 'axios';
import React, {useState, useEffect} from 'react';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList'

export default () => {
    
    const [posts, setPosts] = useState({})
    
    const fetchPosts = async ()=>{
        // get post and comments from query service
        const res = await axios.get('http://localhost:4002/posts');
        setPosts(res.data);
    }

    useEffect(()=>{
        fetchPosts();
    },[]) // empty array to indicate run only one time after comp loads

    
    const renderedPosts = Object.values(posts) // array of objects
                                 .map(post=> {
                                     return <div 
                                                className="card" 
                                                style={{width:'30%', marginBottom:'20px'}}
                                                key={post.id}            
                                            >
                                                <div className="card-body">
                                                    <h3>{post.title}</h3>
                                                    <CommentList comments={post.comments}/>
                                                    <CommentCreate postId={post.id} />

                                                </div>
                                            </div>
                                 })
    return (
        <div className="d-flex flex-row flex-wrap justify-content-between">
            {renderedPosts}
        </div>
    )
}