import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';

function Login (){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();


    const handleLogin =() =>{
        if(username === 'harry' && password === '999'){
            localStorage.setItem('loginStatus',JSON.stringify({username, password}));
            history.push('/home');
        }else{
            setUsername('');
            setPassword('');
            alert('用户名/密码错误');
        }
    }

    return(
        <div>
            <div>
                username: <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} />
            </div>
            <div>
                password: <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
            </div>
            <button onClick={handleLogin}>login</button>
        </div>
    )
}

export default Login;