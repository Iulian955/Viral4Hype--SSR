import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ContextWrapper } from "./Context";
import routes from "./routes/routes";
import Loading from "./components/Loading/Loading";

const Navbar = lazy(() => import("../client/components/Navbar/Navbar"));
const Footer = lazy(() => import("../client/components/Footer/Footer"));

export const App = () => {
  return (
    <ContextWrapper>
      <Suspense
        fallback={
          <div>
            <Loading />
          </div>
        }
      >
        <Navbar />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.component />} />
          ))}
        </Routes>
        <Footer />
      </Suspense>
    </ContextWrapper>
  );
};

export default App;
