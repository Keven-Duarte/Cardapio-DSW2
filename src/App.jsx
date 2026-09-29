import { BrowserRouter, Routes, Route } from "react-router";
import HomeLayout from "./layouts/HomeLayout";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<HomeLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}