import EmailCard from "@/components/admin/email-templates/email-card";
import { Button } from "@/components/ui/button";
import React from "react";

import { IoArrowBackCircleOutline } from "react-icons/io5";

const EmailTemplate = () => {
  return (
    <section className="flex-1 overflow-auto bg-blue-100 w-full">
      <div>
        <div className="flex flex-col bg-white p-4 m-4 gap-4 rounded-xl">
          <div className="flex justify-between gap-4">
            <h1 className="mb-4 text-xl font-bold">Email Templates</h1>
            <div className="flex items-center justify-center gap-2 min-w-[100px] h-[45px] border border-border">
              <IoArrowBackCircleOutline />
              <span>Back</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-white p-4 m-4 gap-4 rounded-xl">
          <div className="flex justify-end">
            <Button className="min-w-[150px]">Add a Email Template</Button>
          </div>
          <div>
            <EmailCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailTemplate;
