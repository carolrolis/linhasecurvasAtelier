import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Sobre from "./pages/sobre";
import Loading from "./pages/loading";

const Home = lazy(() => import("./pages/home"));

export default function App() {
  return (
    <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </Suspense>
  );
}
