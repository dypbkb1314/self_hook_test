
import React from 'react'
import {useSelector} from 'react-redux';

interface Self{
    name: string
}

const Self = function(){
    const name = useSelector((state: Self) => state.name)
    return (
        <span>{name}</span>
    )
}
export default Self