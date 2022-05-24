import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PostList = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(posts.data)
        }
        fetchData()

        // axios.get('https://jsonplaceholder.typicode.com/posts')
        //     .then(res => setPosts(res.data))
        //     .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <ul>{posts.map(post => <li key={post.id}>{post.title}</li>)}</ul>
        </div>
    )
}

export default PostList