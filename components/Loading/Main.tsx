import Loader from "../Loader";

export default function LoadingMain() {
  return (
    <div className="h-screen flex flex-col items-center justify-center w-full">
      <div className="scale-75">
        <Loader />
      </div>
    </div>
  );
}
