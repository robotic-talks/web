"use client";

import Link from "next/link";
import * as React from "react";
import {
  BsCalendar,
  BsCalendarPlus,
  BsClock,
  BsPerson,
  BsTextLeft,
  BsYoutube,
} from "react-icons/bs";
import { MdSlideshow } from "react-icons/md";
import { RiSlideshow2Fill } from "react-icons/ri";

type TalkCardProps = {
  title: string;
  description: string;
  speakers: string[];
  scheduledTime: Date;
  watchUrl: string;
  slidesUrl: string;
};

const TalkCard = ({
  scheduledTime,
  description,
  speakers,
  title,
  watchUrl,
  slidesUrl,
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
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
            timeZoneName: "shortGeneric",
          }).format(scheduledTime)}
        </span>
      </div>
      <div className="flex flex-1 items-start gap-2 mt-2">
        <div>
          <BsTextLeft />
        </div>
        <p className="flex-1 text-justify">{description}</p>
      </div>
      <hr className="opacity-10 my-1 hidden lg:block" />

      <div className="join self-end lg:self-center rounded lg:rounded-lg overflow-hidden">
        <Link
          href={watchUrl}
          className="btn join-item hover:bg-red-500 flex items-center gap-2"
        >
          <BsYoutube size={24} />
          <div className="hidden lg:block">Watch</div>
        </Link>
        <Link
          href={slidesUrl}
          className="btn join-item hover:btn-accent flex items-center gap-2"
        >
          <RiSlideshow2Fill size={24} />{" "}
          <div className="hidden lg:block">Slides</div>
        </Link>
      </div>
    </div>
  );
};

export default TalkCard;
