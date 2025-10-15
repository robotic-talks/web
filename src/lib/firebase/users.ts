import { auth, firestore } from "@/lib/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

export const isCurrentUserAdmin = async (): Promise<boolean> => {
  const user = auth.currentUser;
  if (!user) return false;

  const rolesRef = collection(firestore, "roles");
  const q = query(rolesRef, where("name", "==", "admin"));
  const snapshot = await getDocs(q);

  if (snapshot.empty) return false;

  const adminDoc = snapshot.docs[0].data();
  return Array.isArray(adminDoc.uids) && adminDoc.uids.includes(user.uid);
};
