"use client";

import Image from "next/image";
import React from "react";

import AdviserSettings from "../../../../public/Adviser settings.png";
import { Calendar } from "@/components/ui/calendar";
import StatCard from "@/components/admin/dashboard/stat-main-card";
import EndCard from "@/components/admin/dashboard/end-main-card";

const Dashboard = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <>
      <div className="flex-1 overflow-auto bg-yellow-300 w-full">
        <section className=" bg-blue-100">
          <div className="flex flex-col md:flex-row  p-4 gap-4 ">
            {/*left side */}
            <div className="lg:w-2/3 flex flex-col gap-4">
              {/*3 card div */}
              <div className="flex flex-col md:flex-row gap-4">
                <StatCard
                  title="Total Advisors"
                  maincount={24}
                  active={24}
                  inactiv={0}
                />
                <StatCard
                  title="Total Client"
                  maincount={1347}
                  active={1346}
                  inactiv={1}
                />
                <StatCard
                  title="Total Lead"
                  maincount={13}
                  active={13}
                  inactiv={0}
                />
              </div>

              {/*Adviser setting section */}
              <div className="bg-white p-2 rounded-xl">
                <div className="flex items-center justify-center gap-2">
                  <Image
                    src={AdviserSettings}
                    alt="AdviserSettings"
                    width={150}
                  />
                </div>
                <h4 className="font-bold text-center">Adviser settings</h4>
              </div>

              {/*4 card div */}
              <div className="flex flex-col md:flex-row gap-4">
                <EndCard image="/Adviser settings.png" title="Organizations" />
                <EndCard image="/Adviser settings.png" title="Promo Codes" />
                <EndCard image="/Adviser settings.png" title="Word Templates" />
                <EndCard image="/Adviser settings.png" title="Supweannuation" />
              </div>
            </div>

            {/*right side */}
            <div className=" lg:w-1/3 bg-red-200">
              {/*calander */}
              <div className="">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </div>

              <div>user list</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
