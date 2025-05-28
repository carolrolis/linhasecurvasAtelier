import { lazy, Suspense, useState } from "react";
import { Route, Routes} from "react-router-dom";
import FirstLoading from "./pages/firstLoading";
import ScrollToTop from "./components/scrollToTop";
import loadingSVG from "./assets/images/icons/loading.svg";

const Home = lazy(() => import("./pages/home"));
const Sobre = lazy(() => import("./pages/sobre"));
const Category = lazy(() => import("./pages/categoria"));
const Catalogo = lazy(() => import("./pages/catalogo"));
// const NotFound = lazy(() => import("./pages/notFound"));

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
        <ScrollToTop />

        <Suspense
          fallback={
            <div className="flex min-h-screen items-center justify-center">
              <img
                className="animate-spin m-auto mt-60"
                alt="Loading"
                src={loadingSVG}
              />
            </div>
          }
        >
          <Routes>
            <Route path="/catalogo/:categoryID" element={<Category />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/" element={<Home />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Suspense>
      </div>
    </>
  );
}
