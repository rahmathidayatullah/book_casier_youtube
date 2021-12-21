import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/login";
import ListProduct from "./pages/ListProduct";
import Category from "./pages/Category";
import Transaksi from "./pages/Transaksi";
import Dashboard from "./pages/Dashboard";
import ManagementProduct from "./pages/ManagementProduct";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
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
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>

        {/* <Login /> */}
        <Layout>
          <Routes>
            {routes &&
              routes.map((route, i) => {
                const { path, Component } = route;
                return <Route key={i} path={path} element={<Component />} />;
              })}
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
