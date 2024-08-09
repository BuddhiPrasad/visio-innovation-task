import TaxCard from "@/components/admin/advisor-settings/tax-card";
import UnderDevelopment from "@/components/common/UnderDevelopment";
import { Button } from "@/components/ui/button";
import { IoArrowBackCircleOutline } from "react-icons/io5";

import React from "react";

const AdvisorSettings = () => {
  return (
    <section className="flex-1 overflow-auto bg-blue-100 w-full">
      <div>
        <div className="flex flex-col bg-white p-4 m-4 gap-4 rounded-xl">
          <div className="flex justify-between gap-4">
            <h1 className="mb-4 text-xl font-bold">Advisor Settings</h1>
            <div className="flex items-center justify-center gap-2 min-w-[100px] h-[45px] border border-border">
              <IoArrowBackCircleOutline />
              <span>Back</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <Button className="min-w-[180px]">Individual Tax Settings</Button>
            <Button className="min-w-[180px]">Company tax Settings</Button>
          </div>
        </div>

        <div className="flex flex-col bg-white p-4 m-4 gap-4 rounded-xl">
          <div className="flex justify-end">
            <Button className="min-w-[150px]">Add a Tax</Button>
          </div>
          <div>
            <TaxCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvisorSettings;
