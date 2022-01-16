import React, { useEffect } from "react";
import "./App.css";
import Login from "./pages/login";
import ListProduct from "./pages/ListProduct";
import Category from "./pages/Category";
import Transaksi from "./pages/Transaksi";
import Dashboard from "./pages/Dashboard";
import ManagementProduct from "./pages/ManagementProduct";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import { listen } from "./app/Listener";
function App() {
  useEffect(() => {
    listen();
  }, []);
  const routes = [
    {
      path: "/list_product",
      Component: ListProduct,
    },
    {
      path: "/dashboard",
      Component: Dashboard,
    },
    {
      path: "/category",
      Component: Category,
    },
    {
      path: "/book_management",
      Component: ManagementProduct,
    },
    {
      path: "/transaksi",
      Component: Transaksi,
    },
  ];
  return (
    <Provider store={store}>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>

          <Routes>
            {routes &&
              routes.map((route, i) => {
                const { path, Component } = route;
                return (
                  <Route
                    key={i}
                    path={path}
                    element={
                      <Layout>
                        <Component />
                      </Layout>
                    }
                  />
                );
              })}
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
