import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';

import Footer from './components/Footer';
import Sitemap from './pages/Sitemap';
import Header from './components/Header';

import SideBar from './components/Sidebar'

export default function Routes() {
    const routes = [
        {
            name:"home",
            exact: true,
            component: Home,
            path: "/"
        },
        {
            name:"about",
            exact: true,
            component: About,
            path: "/about"
        },
        {
            name:"projects",
            exact: true,
            component: Projects,
            path: "/projects"
        },
        {
            name:"services",
            exact: true,
            component: Services,
            path: "/services"
        },
        {
            name:"contact",
            exact: true,
            component: Contact,
            path: "/contact"
        },
        {
            name:"sitempa",
            exact: true,
            component: Sitemap,
            path: "/sitemap"
        },
    ]
    return (
        <BrowserRouter>
            <Header />
            <SideBar />
            <Switch>
                {routes.map(route => (<Route key={route.name} {...route}></Route>))}
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}