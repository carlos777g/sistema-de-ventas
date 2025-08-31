import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "../index";
export function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
