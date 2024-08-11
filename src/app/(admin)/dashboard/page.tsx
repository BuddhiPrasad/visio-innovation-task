"use client";

import Image from "next/image";
import React from "react";

import AdviserSettings from "../../../../public/Adviser settings.png";
import { Calendar } from "@/components/ui/calendar";
import StatCard from "@/app/(admin)/_components/_dashboard/stat-main-card";
import EndCard from "@/app/(admin)/_components/_dashboard/end-main-card";
import NotificationCard from "@/app/(admin)/_components/_dashboard/notification-card";

const Dashboard = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <>
      <div className="flex-1 overflow-auto bg-blue-100 w-full">
        <div className="flex flex-col md:flex-row p-4 gap-4">
          {/*left side */}
          <div className="flex flex-col gap-4 w-full">
            {/*3 card div */}
            <div className="grid md:grid-cols-3 gap-4">
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
            <div className="grid md:grid-cols-4 gap-4">
              <EndCard image="/Adviser settings.png" title="Organizations" />
              <EndCard image="/Adviser settings.png" title="Promo Codes" />
              <EndCard image="/Adviser settings.png" title="Word Templates" />
              <EndCard image="/Adviser settings.png" title="Supweannuation" />
            </div>
          </div>

          {/*right side */}
          <div className="flex flex-col gap-4">
            {/*calander */}
            <div className="bg-white p-2 rounded-xl">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </div>

            {/*notification list */}
            <div className="bg-white p-2 rounded-xl">
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-bold">
                  Notification{" "}
                  <span className="bg-red-600 rounded-full p-2 text-sm text-white">
                    04
                  </span>
                </h1>
                <NotificationCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
