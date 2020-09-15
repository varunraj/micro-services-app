import axios from 'axios';
import React, {useState, useEffect} from 'react';

export default () => {
    
    const [posts, setPosts] = useState({})
    
    const fetchPosts = async ()=>{
        const res = await axios.get('http://localhost:4000/posts');
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
                                                </div>
                                            </div>
                                 })
    return (
        <div className="d-flex flex-row flex-wrap justify-content-between">
            {renderedPosts}
        </div>
    )
}