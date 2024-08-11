import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GrLinkNext } from "react-icons/gr";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiExternalLinkLine } from "react-icons/ri";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-blue-100 h-screen">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-xl">Hi 👋, Im Buddhi Prasad</h1>
        <p className="text-center max-w-[350px]">
          This is the front end task. click get started to view design. Thank
          You.
        </p>
        <div className="flex gap-4 mb-8">
          <FaGithub href="https://github.com/BuddhiPrasad" size={25} />
          <FaLinkedin
            href="https://www.linkedin.com/in/buddhi-prasad-6459a01a2/"
            size={25}
          />
        </div>
      </div>
      <div className="flex gap-8">
        {/*button */}
        <Button asChild>
          <Link href="/login">
            Get Started
            <span className="pl-2">
              <GrLinkNext size={20} />
            </span>
          </Link>
        </Button>
        {/*go live */}
        <Button asChild>
          <Link href="https://admin-panel-eight-sand.vercel.app/">
            Go Live
            <span className="pl-2">
              <RiExternalLinkLine size={20} />
            </span>
          </Link>
        </Button>
      </div>
    </main>
  );
}
