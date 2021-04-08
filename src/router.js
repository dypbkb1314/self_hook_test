
import List from './components/list';
import Info from './components/info';
import AntdTest from './components/antd_test';
import Home from './App';
import Calculator from './components/templure';
import ThemeTest from './components/theme-app';

const routes = [
    {
        path: '/',
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
