import FOUR from "@/assets/404.png";
import { Link } from "next-view-transitions";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="grid gap-4 max-w-[500px] mx-auto my-6">
      <Image className="w-[400px] mx-auto" src={FOUR} alt="not found" />
      <div className="grid gap-6 text-center">
        <div>
          <h2 className="mb-0">Page Not Found</h2>
          <p>Sorry! The page you{"'"}re looking for cannot be found.</p>
        </div>
        <div className="flex justify-center">
          <Link
            className="button gradient--allo--bg btn text-white font-[600] p-2 rounded-lg w-fit"
            href="/"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
