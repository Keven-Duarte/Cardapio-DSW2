import { BrowserRouter, Routes, Route } from "react-router";
import HomeLayout from "./layouts/HomeLayout";
import MenuLayout from "./layouts/MenuLayout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route index element={<Home />} />
        </Route>

        <Route element={<MenuLayout />}>
          <Route path="/cardapio" element={<Menu />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}