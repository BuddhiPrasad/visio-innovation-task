"use client";

import Image from "next/image";
import React from "react";

import AdviserSettings from "../../../../public/Adviser settings.png";
import { Calendar } from "@/components/ui/calendar";

const Dashboard = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <>
      <div className="flex overflow-auto bg-yellow-300 w-full">
        <section className="bg-blue-100 w-full">
          <div className="pl-4 pt-4 pr-4  w-full">
            <div className="flex flex-col lg:flex-row  gap-4">
              {/*left side */}
              <div className="flex flex-col lg:w-2/3  gap-4">
                {/*3 card div */}
                <div className="flex flex-col md:flex-row gap-4">
                  {/*card 01 start */}
                  <div className="bg-white flex flex-col p-2 rounded-xl gap-y-8 w-full">
                    {/*upset */}
                    <div className="flex items-center">
                      <h1 className="text-6xl font-bold">24</h1>
                      <span>Total Advisors</span>
                    </div>
                    {/*downset */}
                    <div className="flex justify-between">
                      <div className="flex flex-col gap-2">
                        <h2 className="text-3xl font-bold">24</h2>
                        <span className="uppercase">active</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h2 className="text-3xl font-bold text-right">00</h2>
                        <span className="uppercase text-right">inactive</span>
                      </div>
                    </div>
                  </div>
                  {/*card 01 end */}

                  {/*card 02 start */}
                  <div className="bg-white flex flex-col p-2 rounded-xl gap-y-8 w-full">
                    {/*upset */}
                    <div className="flex items-center">
                      <h1 className="text-6xl font-bold">1347</h1>
                      <span>Total Client</span>
                    </div>
                    {/*downset */}
                    <div className="flex justify-between">
                      <div className="flex flex-col gap-2">
                        <h2 className="text-3xl font-bold">24</h2>
                        <span className="uppercase">active</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h2 className="text-3xl font-bold text-right">00</h2>
                        <span className="uppercase text-right">inactive</span>
                      </div>
                    </div>
                  </div>
                  {/*card 02 end */}

                  {/*card 03 start */}
                  <div className="bg-white flex flex-col p-2 rounded-xl gap-y-8 w-full">
                    {/*upset */}
                    <div className="flex items-center">
                      <h1 className="text-6xl font-bold">13</h1>
                      <span>Total Lead</span>
                    </div>
                    {/*downset */}
                    <div className="flex justify-between">
                      <div className="flex flex-col gap-2">
                        <h2 className="text-3xl font-bold">24</h2>
                        <span className="uppercase">active</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h2 className="text-3xl font-bold text-right">00</h2>
                        <span className="uppercase text-right">inactive</span>
                      </div>
                    </div>
                  </div>
                  {/*card 03 end */}
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
                  <div className="flex gap-4 w-full">
                    {/*card 01 */}
                    <div className="bg-white p-2 rounded-xl w-full">
                      <div className="flex items-center justify-center gap-2">
                        <Image
                          src={AdviserSettings}
                          alt="AdviserSettings"
                          width={150}
                        />
                      </div>
                      <h4 className="font-bold text-center">
                        Adviser settings
                      </h4>
                    </div>
                    {/*card 01 end */}

                    {/*card 02 */}
                    <div className="bg-white p-2 rounded-xl w-full">
                      <div className="flex items-center justify-center gap-2">
                        <Image
                          src={AdviserSettings}
                          alt="AdviserSettings"
                          width={150}
                        />
                      </div>
                      <h4 className="font-bold text-center">
                        Adviser settings
                      </h4>
                    </div>
                    {/*card 02 end */}
                  </div>

                  <div className="flex gap-4 w-full">
                    {/*card 03 */}
                    <div className="bg-white p-2 rounded-xl w-full">
                      <div className="flex items-center justify-center gap-2">
                        <Image
                          src={AdviserSettings}
                          alt="AdviserSettings"
                          width={150}
                        />
                      </div>
                      <h4 className="font-bold text-center">
                        Adviser settings
                      </h4>
                    </div>
                    {/*card 03 end */}

                    {/*card 04 */}
                    <div className="bg-white p-2 rounded-xl w-full">
                      <div className="flex items-center justify-center gap-2">
                        <Image
                          src={AdviserSettings}
                          alt="AdviserSettings"
                          width={150}
                        />
                      </div>
                      <h4 className="font-bold text-center">
                        Adviser settings
                      </h4>
                    </div>
                    {/*card 04 end */}
                  </div>
                </div>
              </div>

              {/*right side */}
              <div className=" lg:w-1/3 bg-red-200">
                {/*calander */}
                <div className="bg-green-300">
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
          </div>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
