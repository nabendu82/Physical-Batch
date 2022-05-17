import React, { Component } from 'react'
import { UserConsumer } from './useContext'

class Child extends Component {
    render() {
        return (
            <UserConsumer>
                {user => {
                    return (
                        <div>
                            <h1>{user}</h1>
                        </div>
                    )
                }}
            </UserConsumer>
        )
    }
}

export default Child