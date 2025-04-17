import { useEffect } from "react";
import logo from "../assets/images/logos/logo.svg";

interface FirstLoadingProps {
  onComplete: () => void;
}

const FirstLoading: React.FC<FirstLoadingProps> = ({ onComplete }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      clearInterval(interval);
      setTimeout(() => {
        onComplete();
      }, 2000);
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 w-screen h-screen bg-bege">
      <div className="max-w-2/11 min-w-55 m-auto">
        <img className="mt-60" alt="Loading" src={logo} />
      </div>
    </div>
  );
};

export default FirstLoading;
