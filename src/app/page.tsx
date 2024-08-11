import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CiLogin } from "react-icons/ci";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center bg-blue-100 h-screen ">
      {/*button */}
      <Button asChild className="w-[300px]">
        <Link href="/login">
          Get Start
          <span className="pl-2">
            <CiLogin size={25} />
          </span>
        </Link>
      </Button>
    </section>
  );
}
