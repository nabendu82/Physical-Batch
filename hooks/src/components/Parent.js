import React, { useContext } from 'react'
import Child from './Child'
import { ChannelContext, UserContext } from '../App'

const Parent = () => {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

    return (
        <>
            <h4>useContext - {user} - {channel}</h4>
            <Child />
        </>
    )
}

export default Parent