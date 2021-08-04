import React from 'react'
import './hoc.css'


export default function Hoc(props) {
    // return (
    //     <div className="hoc_green">
    //         <h1>hoc title {props.name}</h1>
    //         <h3>this is first part</h3>
    //         {props.first}
    //         <h3>this is twice part</h3>
    //         {props.twice}
    //         {props.children}
    //     </div>
    // )

    const [count, setCount] = useState(0);
    const submit = () => {
        setCount((count) => { count + 1 })
        props.dispatch({
            type: 'global/submitUserInfo',
            payload: { ...params },
        })
    }
    return (

        <div>
            <a-button onClick={onSubmit}></ a-button>
        </div>
    )
}

Hoc.defaultProps = {
    name: 'default'
}
