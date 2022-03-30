import React ,{useState, useEffect, ReactNode, ReactElement} from 'react'

const Index = ({children, first, twice, name}:{children: ReactNode, first: ReactNode, twice: ReactNode, name: string}) =>{
    const [isShow, setIsShow] = useState(false)
    return <div>
        <p>{name}</p>
        {first}
        {twice}
        <button onClick={() => setIsShow(!isShow)} >点击</button>
        {children}
    </div>
}

export default  Index;
