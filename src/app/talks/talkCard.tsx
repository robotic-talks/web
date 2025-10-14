"use client";

import * as React from "react";
import { BsClock, BsPerson, BsTextLeft, BsYoutube } from "react-icons/bs";

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
    <div className="flex flex-col gap-2 rounded shadow-sm p-4 border-b-2 border-b-primary/30">
      <h2 className="font-bold text-xl">{title}</h2>
      <div className="flex text-xs lg:text-sm items-center gap-2">
        <i>
          <BsPerson size={12} />
        </i>
        <span>{speakers.join(", ")}</span>
      </div>
      <div className="flex text-xs lg:text-sm items-center gap-2">
        <i>
          <BsClock size={12} />
        </i>
        <span>
          {new Intl.DateTimeFormat(navigator.language, {
            dateStyle: "short",
            timeStyle: "short",
          }).format(scheduledTime)}
        </span>
      </div>
      <div className="flex items-start gap-2 mt-2">
        <div>
          <BsTextLeft />
        </div>
        <p className="flex-1 text-justify">
          {description} Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Reiciendis debitis rerum voluptatem molestias quibusdam
          cupiditate hic esse quisquam at soluta iure doloribus molestiae illo
          delectus, possimus voluptatibus recusandae a eum!
        </p>
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
