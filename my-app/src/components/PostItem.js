import React from 'react'
import './PostItem.css'
import styled from 'styled-components'

const headerStyle = {
    backgroundColor: 'lightcyan',
    color: 'darkmagenta',
    padding: '5px'
}

const ParaStyle = styled.p`
    background-color: lightgreen;
    color: darkblue;
    padding: 5px;
`

const Button = styled.button`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

const PostItem = ({ post }) => {
    return (
        <div className='container'>
            <h1 style={headerStyle}>Blog #{post.id}</h1>
            <h2 style={{ backgroundColor: 'lightpink', color: 'darkred', padding: '2px'}}>Title: {post.title}</h2>
            <ParaStyle>{post.body}</ParaStyle>
            <Button>Normal</Button>
            <Button primary>Primary</Button>
        </div>
    )
}

export default PostItem