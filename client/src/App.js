import React from 'react'
import PostCreate from './PostCreate'
import PostList from './PostList'

export default () => {
    return (
        <div className="container">
            <h1>Create a Post</h1>
            <PostCreate />
            <hr />
            <PostList />
        </div>
    )
}