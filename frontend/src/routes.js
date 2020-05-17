import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

import Footer from "./components/Footer";
import Sitemap from "./pages/Sitemap";
import Header from "./components/Header";

import SideBar from "./components/Sidebar";

import Resume from "./pages/Resume";
import Publicacoes from "./pages/Publicacoes";
import BragDocument from "./pages/BragDocument";

export default function Routes() {
  const routes = [
    {
      name: "home",
      exact: true,
      component: Home,
      path: "/",
    },
    {
      name: "about",
      exact: true,
      component: About,
      path: "/about",
    },
    {
      name: "projects",
      exact: true,
      component: Projects,
      path: "/projects",
    },
    {
      name: "services",
      exact: true,
      component: Services,
      path: "/services",
    },
    {
      name: "contact",
      exact: true,
      component: Contact,
      path: "/contact",
    },
    {
      name: "blog",
      exact: true,
      component: Blog,
      path: "/blog",
    },
    {
      name: "sitempa",
      exact: true,
      component: Sitemap,
      path: "/sitemap",
    },
    {
      name: "resumo",
      exact: true,
      component: Resume,
      path: "/resume",
    },
    {
      name: "publicacoes",
      exact: true,
      component: Publicacoes,
      path: "/publicacoes",
    },
    {
      name: "Brag Document",
      exact: true,
      component: BragDocument,
      path: "/bragdocument",
    },
  ];
  return (
    <BrowserRouter>
      <section style={{ display: "flex", flexDirection: "row" }}>
        <SideBar />
        <div style={{ marginBottom: 40, width: "100%" }}>
          <Header />
          <Switch>
            {routes.map((route) => (
              <Route key={route.name} {...route}></Route>
            ))}
          </Switch>
          <Footer />
        </div>
      </section>
    </BrowserRouter>
  );
}
