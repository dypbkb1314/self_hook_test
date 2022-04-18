import React from 'react'
import { lazy } from 'react';

import Calculator from '../components/templure'
import ThemeTest from '../components/theme-app'
import Login from '../components/index'
import MousePage from '../components/mousepage'
import BgTest from '../components/bg-test'
import TodoList from '../components/todolist'
import RouterTest from '../components/router-test'

const List = lazy(() => import('../components/list'));
const Info = lazy(() => import('../components/info'));
const Echarts = lazy(() => import('../components/echarts'));
const AntdTest = lazy(() => import('../components/antd_test'));
const Home = lazy(() => import('../App'));

const NotFound = () => {
    return (
        <h1>page not found</h1>
    )
}

const Profile = () => <div>You're on the Profile Tab</div>;
const Comments = () => <div>You're on the Comments Tab</div>;
const Contact = () => <div>You're on the Contact Tab</div>;

function Bus() {
    return <h3>Bus</h3>;
}

function Cart() {
    return <h3>Cart</h3>;
}

function Sandwiches() {
    return <h2>Sandwiches</h2>;
}
function Tacos() {
    return <h2>Tacos</h2>;
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
        auth: false
    },
    {
        path: '/info',
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
        path: '/mousemove',
        component: MousePage,
        auth: false
    },
    {
        path: '/bg-test',
        component: BgTest,
        auth: false
    },
    {
        path: '/echarts',
        component: Echarts,
        auth: false
    },
    {
        path: '/todolist',
        component: TodoList,
        auth: false
    },
    {
        path: '/router_test',
        component: RouterTest,
        routes: [
            {
                path: "/router_test/page1",
                component: Profile
            },
            {
                path: "/router_test/page2",
                component: Comments
            },
            {
                path: "/router_test/page3",
                component: Contact
            },
        ],
        auth: false
    },
    {
        path: "/sandwiches",
        component: Sandwiches
    },
    {
        path: "/tacos",
        component: Tacos,
        routes: [
            {
                path: "/tacos/bus",
                component: Bus
            },
            {
                path: "/tacos/cart",
                component: Cart
            }
        ]
    },
    {
        path: "/404",
        component: NotFound,
        auth: false,
    },
];

export default RouterConfig;
