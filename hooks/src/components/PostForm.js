import axios from 'axios'
import React, { useState } from 'react'

const PostForm = () => {
    const [userId, setUserId] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleChange = e => {
        const { name, value } = e.target
        if (name === 'userId') {
            setUserId(value)
        } else if (name === 'title') {
            setTitle(value)
        } else if (name === 'body') {
            setBody(value)
        }
    }

    // const handleSubmit = e => {
    //     e.preventDefault()
    //     axios.post('https://jsonplaceholder.typicode.com/posts', { userId, title, body })
    //         .then(res => console.log(res.data))
    //         .catch(err => console.log(err))
    // }

    const handleSubmit = async e => {
        e.preventDefault()
        const post = await axios.post('https://jsonplaceholder.typicode.com/posts', { userId, title, body })
        console.log(post.data);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" name="userId" value={userId} onChange={handleChange} />
            </div>
            <div>
                <input type="text" name="title" value={title} onChange={handleChange} />
            </div>
            <div>
                <input type="text" name="body" value={body} onChange={handleChange} />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default PostForm
