import React, { Component } from 'react'

class DemoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            comment: '',
            language: 'react',
            isSubmit: false
        }
    }

    handleEmailChange = e => {
        this.setState({
            email: e.target.value
        })
    }

    handleCommentChange = e => {
        this.setState({
            comment: e.target.value
        })
    }

    handleLangChange = e => {
        this.setState({
            language: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        this.setState({
            isSubmit: true,
        })
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="email">Email </label>
                        <input type="text" id="email" value={this.state.email} onChange={this.handleEmailChange} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="comment">Comment</label>
                        <textarea id="comment" value={this.state.comment} onChange={this.handleCommentChange}></textarea>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="language">Language</label>
                        <select id="language" value={this.state.language} onChange={this.handleLangChange}>
                            <option value="vue">Vue</option>
                            <option value="react">React</option>
                            <option value="angular">Angular</option>
                        </select>
                    </div>
                    <br />
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
                {this.state.email && this.state.isSubmit && <h1>Email: {this.state.email}</h1>}
                {this.state.comment && this.state.isSubmit && <h2>Comment: {this.state.comment}</h2>}
                {this.state.language && this.state.isSubmit && <p>Language: {this.state.language}</p>}
            </>
        )
    }
}

export default DemoForm
