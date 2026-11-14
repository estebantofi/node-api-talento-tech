import { db } from "../config/firebase.js";

export const loginWithUsernamePassword = async (username, password) => {
  const snapshot = await db
    .collection("users")
    .where("username", "==", username)
    .where("password", "==", password)
    .select("username")
    .limit(1)
    .get();

  return snapshot.empty ? null : snapshot.docs[0].data();
};
