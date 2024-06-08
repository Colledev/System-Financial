import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layout/layout";
import Budget from "../pages/Budget";

const AppRoutes = () => {
    return (
        <Routes>
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
