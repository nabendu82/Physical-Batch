import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.emailref = React.createRef()
    }

    componentDidMount(){
        this.inputRef.current.focus()
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.inputRef.current.value)
        console.log(this.emailref.current.value)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" ref={this.inputRef} />
                <input type="email" ref={this.emailref} />
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default RefsDemo
