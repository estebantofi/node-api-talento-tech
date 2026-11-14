import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

import "dotenv/config";

initializeApp({
  credential: applicationDefault(),
});

export const db = getFirestore();
