import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async e => {
        e.preventDefault()
        const url = 'https://jsonplaceholder.typicode.com/posts'
        const settings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(this.state)
        }
        const res = await fetch(url, settings)
        const data = await res.json()
        console.log(data)
    }

    render() {
        const { userId, title, body } = this.state

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text" name="userId" value={userId} onChange={this.handleChange} />
                </div>
                <div>
                    <input type="text" name="title" value={title} onChange={this.handleChange} />
                </div>
                <div>
                    <input type="text" name="body" value={body} onChange={this.handleChange} />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default PostForm
