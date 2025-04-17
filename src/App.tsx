import { lazy, Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./pages/loading";
import FirstLoading from "./pages/firstLoading";
import Catalogo from "./pages/catalogo";

const Home = lazy(() => import("./pages/home"));
const Sobre = lazy(() => import("./pages/sobre"));
const Category = lazy(() => import("./pages/category"));
const NotFound = lazy(() => import("./pages/notfound"));

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && (
        <FirstLoading
          onComplete={() => {
            setIsLoaded(true);
          }}
        />
      )}

      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/catalogo/:categoryID" element={<Category />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}
