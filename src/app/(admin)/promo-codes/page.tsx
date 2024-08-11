import CustomBackButton from "@/app/(admin)/_components/custom-back-bitton";
import UnderDevelopment from "@/components/UnderDevelopment";
import React from "react";

const PromoCodes = () => {
  return (
    <section className="flex-1 overflow-auto bg-blue-100 w-full ">
      <div className="flex flex-col bg-white p-4 m-4 gap-4 rounded-xl">
        <div className="flex justify-between gap-4">
          <h1 className="mb-4 text-xl font-bold">Promo Codes</h1>
          <CustomBackButton />
        </div>
      </div>

      <div className="flex flex-col bg-white p-4 m-4 gap-4 rounded-xl ">
        <div className="p-6  flex items-center justify-center h-screen">
          <UnderDevelopment />
        </div>
      </div>
    </section>
  );
};

export default PromoCodes;
