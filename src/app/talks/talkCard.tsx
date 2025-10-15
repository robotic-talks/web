"use client";

import * as React from "react";
import {
  BsCalendar,
  BsClock,
  BsPerson,
  BsTextLeft,
  BsYoutube,
} from "react-icons/bs";

type TalkCardProps = {
  title: string;
  description: string;
  speakers: string[];
  scheduledTime: Date;
  watchUrl: string;
};

const TalkCard = ({
  scheduledTime,
  description,
  speakers,
  title,
  watchUrl,
}: TalkCardProps) => {
  return (
    <div className="flex flex-col gap-2 rounded shadow-sm p-4 border-b-2 border-b-primary/30 h-full">
      <h2 className="font-bold text-xl text-primary">{title}</h2>
      <div className="flex text-xs lg:text-sm items-center gap-2">
        <i>
          <BsPerson size={12} />
        </i>
        <span>{speakers.join(", ")}</span>
      </div>
      <div className="flex text-xs lg:text-sm items-center gap-2">
        <i>
          <BsCalendar size={12} />
        </i>
        <span>
          {new Intl.DateTimeFormat(navigator.language, {
            dateStyle: "short",
            timeStyle: "short",
          }).format(scheduledTime)}
        </span>
      </div>
      <div className="flex flex-1 items-start gap-2 mt-2">
        <div>
          <BsTextLeft />
        </div>
        <p className="flex-1 text-justify">{description}</p>
      </div>
      <div className="flex gap-3 justify-center lg:mt-3">
        <a
          href={watchUrl}
          className="btn btn-outline rounded flex items-center"
        >
          <span className="text-red-500">
            <BsYoutube size={24} />
          </span>
          <span>Watch on YouTube</span>
        </a>
      </div>
    </div>
  );
};

export default TalkCard;
