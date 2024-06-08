import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layout/layout";
import Budget from "../pages/Budget";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AppRoutes = () => {
    return (
        <Routes>
            <Route>
                <Route path="/Login" element={<Login />} />
            </Route>
            <Route>
                <Route path="/Register" element={<Register />} />
            </Route>
            <Route
                path="/"
                element={
                    <Layout>
                        <Home />
                    </Layout>
                }
            />
            <Route
                path="/Budget"
                element={
                    <Layout>
                        <Budget />
                    </Layout>
                }
            />
        </Routes>
    );
};

export default AppRoutes;
