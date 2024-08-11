import CustomBackButton from "@/app/(admin)/_components/custom-back-bitton";
import UnderDevelopment from "@/components/UnderDevelopment";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

import { IoArrowBackCircleOutline } from "react-icons/io5";

import composeImage from "@/../public/Compos.png";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Email = () => {
  return (
    <section className="flex-1 overflow-auto bg-blue-100 w-full">
      <div className="flex flex-col bg-white p-4 m-4 gap-4 rounded-xl">
        <div className="flex items-center justify-between gap-4">
          <h1 className="mb-4 text-xl font-bold">Bulk Email</h1>
          <CustomBackButton />
        </div>
      </div>

      <div className="flex flex-col bg-white p-4 m-4 gap-4 rounded-xl h-screen">
        <div className="flex gap-4">
          <div className="hidden md:flex flex-col items-center">
            <Image
              src={composeImage}
              alt="composeImage"
              width={40}
              height={40}
            />
            <span className="text-sm ">Compose</span>
          </div>

          <div className="hidden md:block border border-black border-border h-screen" />

          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-4 w-full">
              <Input placeholder="To" />
              <Input placeholder="Subject" />
              <Textarea placeholder="Message" />
            </div>
            <div className="flex justify-end">
              <Button className="button-admin-main">Send Email</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Email;
