import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";


function Bus() {
    return <h3>Bus</h3>;
}

function Cart() {
    return <h3>Cart</h3>;
}

function Sandwiches() {
    return <h2>Sandwiches</h2>;
}


const routes = [
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
    }
];

export default function RouteConfigExample() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/tacos">Tacos</Link>
                    </li>
                    <li>
                        <Link to="/sandwiches">Sandwiches</Link>
                    </li>
                </ul>

                <Switch>
                    {/* {routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                    ))} */}
                    <Route
                    path="/tacos"
                    component={Tacos}
                />
                <Route
                    path="/sandwiches"
                    component={Sandwiches}
                />
                </Switch>
            </div>
        </Router>
    );
}

function Tacos({ routes }) {
    return (
        <div>
            <h2>Tacos</h2>
            <ul>
                <li>
                    <Link to="/tacos/bus">Bus</Link>
                </li>
                <li>
                    <Link to="/tacos/cart">Cart</Link>
                </li>
            </ul>

            <Switch>
                {/* {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))} */}
                <Route
                    path="/tacos/bus"
                    component={Bus}
                />
                <Route
                    path="/tacos/cart"
                    component={Cart}
                />
                <Redirect to='/tacos' />
            </Switch>
        </div>
    );
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => {console.log(route);return (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}}
        />
    );
}