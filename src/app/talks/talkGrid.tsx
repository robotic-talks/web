"use client";

import { firestore } from "@/lib/firebase";
import {
  collection,
  getDocs,
  DocumentData,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import TalkCard from "./talkCard";

const TalkGrid = () => {
  const [talks, setTalks] = useState<DocumentData[]>([]);

  useEffect(() => {
    try {
      getDocs(
        query(collection(firestore, "talks"), orderBy("startsAt", "desc"))
      ).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          setTalks((talks) => [...talks, { id: doc.id, ...doc.data() }]);
        });
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 list-none w-full">
      {talks.map((talk) => (
        <li key={talk.id}>
          <TalkCard
            title={talk.title}
            speakers={talk.speakers}
            scheduledTime={talk.startsAt.toDate()}
            watchUrl={talk.watchUrl}
            slidesUrl={talk.slidesUrl}
            description={talk.description}
          />
        </li>
      ))}
    </ul>
  );
};

export default TalkGrid;
