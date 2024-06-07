import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layout/layout";

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
        </Routes>
    );
};

export default AppRoutes;
