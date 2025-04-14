import loadingSVG from "../assets/images/icons/loading.svg";

export default function Loading () {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <img className="animate-spin m-auto mt-60" alt="Loading" src={loadingSVG} />
    </div>
  );
};