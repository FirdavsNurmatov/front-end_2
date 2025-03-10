import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { appRoutes } from "./router/app.routes";
import { SignIn } from "./pages/auth/sign-in";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/app" element={<MainLayout />}>
        {appRoutes.map(({ comp: AppPage, path }, index) => (
          <Route
            key={index}
            index={!path ? true : false}
            path={path}
            element={<AppPage />}
          />
        ))}
      </Route>
      <Route
        path={"/*"}
        element={<h1 className="error_page">No Page Like This!</h1>}
      />
    </Routes>
  );
}

export default App;
