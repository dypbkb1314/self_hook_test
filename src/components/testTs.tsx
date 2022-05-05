import React, { Component } from 'react'

interface IProps{ name: string; age: number; };

class T0<T> extends Component<T> {
    interProp: T;
    constructor(props: T){
        super(props)
        this.interProp = props
    }
    render() {
        return (
            <div>T0</div>
        )
    }
}

function T1<P>(props:P){
    return <></>
}

const T2:React.FC<IProps> = (props) => {
    return <></>
}

const T3 = <P extends any>(props: P) => {
    return<></>
}

export default function OestTs() {
    return (
      <div>
          <T0<IProps> name="jk" age={55} ></T0>
          <T1<IProps> name="jk" age={55} />
          <T2 name="jk" age={55} />
          <T3 name="jk" age={55} />
      </div>
    )
  }