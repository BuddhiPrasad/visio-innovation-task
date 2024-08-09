import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

const notificationlist = [
  {
    username: "Melinda Deleon",
    notificationmsg: "A Message has been Received",
  },
  {
    username: "Daryl Pike",
    notificationmsg: "A Message has been Received",
  },
  {
    username: "Melinda Deleon",
    notificationmsg: "A Message has been Received",
  },
];

const NotificationCard = () => {
  return (
    <section>
      {notificationlist.map((item, index) => {
        return (
          <div
            key={index}
            className="flex gap-4 pb-4 pt-2 items-center border-b"
          >
            <div>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex flex-col gap-1">
              <h4>{item.username}</h4>
              <span className="text-muted-foreground text-sm">
                {item.notificationmsg}
              </span>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default NotificationCard;
