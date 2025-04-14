import { Link } from "react-router-dom";
import logo from "../assets/images/logos/logo.svg";

export default function NotFound() {
  return (
    <div className="max-w-fit m-auto flex flex-col items-center gap-8 p-15">
      <div className="max-w-2/11 min-w-55">
        <img alt="Linhas & Curvas" src={logo} />
      </div>
      <h1 className="font-bold text-2xl text-center">Página não encontrada! :/</h1>
      <Link to="/">
        <button className="cursor-pointer p-2 border-2 bg-bege hover:bg-lightBlue rounded-4xl transition-transform duration-300">
          Voltar para o início
        </button>
      </Link>
    </div>
  );
}
