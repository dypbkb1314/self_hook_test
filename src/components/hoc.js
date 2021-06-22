import React from 'react'
import './hoc.css'

export default function Hoc(props) {
    return (
        <div className="hoc_green">
            <h1>hoc title {props.name}</h1>
            <h3>this is first part</h3>
            {props.first}
            <h3>this is twice part</h3>
            {props.twice}
            {props.children}
        </div>
    )
}

Hoc.defaultProps = {
    name: 'default'
}
