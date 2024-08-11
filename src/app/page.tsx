import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GrLinkNext } from "react-icons/gr";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-blue-100 h-screen">
      {/*button */}
      <Button asChild>
        <Link href="/login">
          Get Started
          <span className="pl-2">
            <GrLinkNext size={20} />
          </span>
        </Link>
      </Button>
    </main>
  );
}
