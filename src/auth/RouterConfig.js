
// import { lazy } from 'react';
// const List from import('../components/list'));
// const Info from import('../components/info'));
// const AntdTest from import('../components/antd_test'));
// const Home from import('../App'));
// const Calculator from import('../components/templure'));
// const ThemeTest from import('../components/theme-app'));
// const Login from import('../components/index'));

import List from '../components/list'
import Info from '../components/info'
import AntdTest from '../components/antd_test'
import Home from '../App'
import Calculator from '../components/templure'
import ThemeTest from '../components/theme-app'
import Login from '../components/index'

const NotFound = () => {
    return (
        <h1>page not found</h1>
    )
}

const RouterConfig = [
    {
        path: "/login",
        component: Login,
        auth: false,
    },
    {
        path: "/home",
        component: Home,
        auth: true
    },
    {
        path: '/list',
        component: List,
        auth: true
    },
    {
        path: '/theme',
        component: ThemeTest,
        auth: true
    },
    {
        path: '/info/:id',
        component: Info,
        auth: true
    },
    {
        path: '/antdTest',
        component: AntdTest,
        auth: true
    },
    {
        path: '/templure',
        component: Calculator,
        auth: true
    },
    {
        path: "/404",
        component: NotFound,
        auth: false,
    },
];

export default RouterConfig;
