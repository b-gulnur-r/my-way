import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import "./App.css";

function App() {
  return (
    <Suspense fallback={<div className="loading">Загрузка...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
