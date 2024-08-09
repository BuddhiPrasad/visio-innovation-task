import React from "react";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";

import { CiLogin } from "react-icons/ci";
import Link from "next/link";

const path = "/Admin/dashboard";

const Login = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-blue-100 h-screen ">
      {/*button */}
      <Button asChild className="w-[200px]">
        <Link href="/login">
          Continue
          <span className="pl-2">
            <CiLogin size={25} />
          </span>
        </Link>
      </Button>
    </section>
  );
};

export default Login;
