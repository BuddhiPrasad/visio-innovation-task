import EmailCard from "@/app/(admin)/_components/_email-templates/email-card";
import CustomBackButton from "@/app/(admin)/_components/custom-back-bitton";
import { Button } from "@/components/ui/button";
import React from "react";

import { IoArrowBackCircleOutline } from "react-icons/io5";

const EmailTemplate = () => {
  return (
    <section className="flex-1 overflow-auto bg-blue-100 w-full">
      <div className="flex flex-col bg-white p-4 m-4 gap-4 rounded-xl">
        <div className="flex justify-between gap-4">
          <h1 className="mb-4 text-xl font-bold">Email Templates</h1>
          <CustomBackButton />
        </div>
      </div>

      <div className="flex flex-col bg-white p-4 m-4 gap-4 rounded-xl h-screen">
        <div className="flex justify-end">
          <Button className="button-admin-main">Add a Email Template</Button>
        </div>
        <div>
          <EmailCard />
        </div>
      </div>
    </section>
  );
};

export default EmailTemplate;
