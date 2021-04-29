
// import List from './components/list';
// import Info from './components/info';
// import AntdTest from './components/antd_test';
// import Home from './App';
// import Calculator from './components/templure';
// import ThemeTest from './components/theme-app';

import {lazy} from 'react';
const List = lazy(() => import('./components/list'));
const Info = lazy(()=>import('./components/info'));
const AntdTest = lazy(()=>import('./components/antd_test'));
const Home = lazy(()=>import('./App'));
const Calculator = lazy(()=>import('./components/templure'));
const ThemeTest =lazy(()=>import('./components/theme-app'));
const FirstHome = lazy(() => import('./components/index'))

const routes = [
    {
        path:'/',
        component: FirstHome,
        exact: true,
    },
    {
        path: '/home',
        component: Home,
        exact: true
    },
    {
        path: '/list',
        component: List,
        exact: true,
    
    },
    {
        path: '/theme',
        component: ThemeTest,
        exact: true,
    },
    {
        path: '/info/:id',
        component: Info,
        exact: true
    },
    {
        path: '/antdTest',
        component: AntdTest,
        exact: true
    },
    {
        path: '/templure',
        component: Calculator,
        exact: true
    }
]

export default routes;

// function SelfRouter(){
//     return (
//         <BrowserRouter>
//             <Switch>
//                 <Route path="/" exact component={Home} />
//                 <Route path="/list" exact component={List} />
//                 <Route path="/info/:id" exact component={Info} />
//             </Switch>
//         </BrowserRouter>
//     )
// }

// export default SelfRouter;
