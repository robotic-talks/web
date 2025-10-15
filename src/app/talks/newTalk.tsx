"use client";

import * as React from "react";
import { BsCalendar, BsCheck, BsX } from "react-icons/bs";
import { MdLink, MdTitle, MdPeopleAlt } from "react-icons/md";
import toast from "react-hot-toast";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { firestore } from "@/lib/firebase";

const NewTalkModal = () => {
  const [title, setTitle] = React.useState("");
  const [link, setLink] = React.useState("");
  const [slidesLink, setSlidesLink] = React.useState(""); // new field
  const [datetime, setDatetime] = React.useState<Date | null>(null);
  const [description, setDescription] = React.useState("");
  const [speakersText, setSpeakersText] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!title || !link || !datetime) {
      toast.error("Please fill all required fields!");
      return;
    }

    setIsSubmitting(true);

    const speakers = speakersText
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    const data = {
      title,
      watchUrl: link,
      slidesUrl: slidesLink || null, // store null if empty
      startsAt: Timestamp.fromDate(datetime),
      description,
      speakers,
    };

    try {
      await toast.promise(addDoc(collection(firestore, "talks"), data), {
        loading: "Saving talk...",
        success: "Talk created successfully!",
        error: "Error saving talk.",
      });

      // reset fields
      setTitle("");
      setLink("");
      setSlidesLink("");
      setDatetime(null);
      setDescription("");
      setSpeakersText("");
      (document.getElementById("new_talk_modal") as HTMLDialogElement)?.close();
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatLocalDatetime = (date: Date) => {
    const pad = (n: number) => n.toString().padStart(2, "0");
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
      date.getDate()
    )}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
  };

  return (
    <dialog id="new_talk_modal" className="modal">
      <div className="modal-box flex flex-col gap-3">
        <h3 className="font-bold text-lg text-center">Create a New Talk</h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <label className="input w-full">
            <MdTitle />
            <input
              type="text"
              placeholder="What's the talk about?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>

          <label className="input w-full">
            <MdLink />
            <input
              type="url"
              placeholder="YouTube link to the talk"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              required
            />
          </label>

          <label className="input w-full">
            <MdLink />
            <input
              type="url"
              placeholder="Link to slides (optional)"
              value={slidesLink}
              onChange={(e) => setSlidesLink(e.target.value)}
            />
          </label>

          <label className="input w-full">
            <BsCalendar />
            <input
              type="datetime-local"
              value={datetime ? formatLocalDatetime(datetime) : ""}
              onChange={(e) => setDatetime(new Date(e.target.value))}
              required
            />
          </label>

          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend">Description</legend>
            <textarea
              className="textarea h-24 w-full"
              placeholder="Describe the talk"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </fieldset>

          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend flex items-center gap-2">
              <MdPeopleAlt /> Speakers
            </legend>
            <textarea
              className="textarea h-20 w-full"
              placeholder="Separate multiple speakers with commas (e.g., Alice, Bob, Charlie)"
              value={speakersText}
              onChange={(e) => setSpeakersText(e.target.value)}
            ></textarea>
          </fieldset>

          <div className="modal-action flex justify-end gap-2">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                (
                  document.getElementById("new_talk_modal") as HTMLDialogElement
                )?.close();
              }}
              className="btn btn-sm btn-neutral flex items-center gap-1"
            >
              <BsX size={20} /> Close
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-sm btn-primary flex items-center gap-1"
            >
              <BsCheck size={20} /> {isSubmitting ? "Saving..." : "Done"}
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default NewTalkModal;
